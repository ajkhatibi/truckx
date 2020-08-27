import firebase from '../../firebaseConfig';
import * as EmailValidator from 'email-validator';
import passwordValidator from "password-validator";
import * as RootNavigation from '../../RootNavigation';

const schema = new passwordValidator();
schema.is().min(8).has().uppercase(1).has().symbols(1).has().digits(1);


class AuthServices {
    checkUser = () => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (!user) {
                RootNavigation.navigate("Login");
            } else {
                RootNavigation.navigate("Home");
            }
        });
    }
    logIn = async (email: string, password: string) => {
        const emailValid = EmailValidator.validate(email);
        const passwordValid = schema.validate(password);
        if (emailValid && passwordValid) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
            } catch (error) {
                console.log(error.message);
            }
        } else {
            console.log("didn't pass validation");
        }
    }
}

export default new AuthServices();