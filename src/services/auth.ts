import firebase from '../../firebaseConfig';
import * as EmailValidator from 'email-validator';
import passwordValidator from "password-validator";
import * as RootNavigation from '../../RootNavigation';
import { Alert } from 'react-native';

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
                Alert.alert("Whoops!", error.message);

            }
        } else {
            Alert.alert("Whoops!", "Looks like your email or password is invalid.");
        }
    }
}

export default new AuthServices();