import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import AuthServices from '../../services/auth';

export default function LoginScreen(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <View>
            <TextInput autoCapitalize="none" value={email} onChangeText={(text) => setEmail(text)} placeholder="Email" />
            <TextInput autoCapitalize="none" secureTextEntry value={password} onChangeText={(text) => setPassword(text)} placeholder="Password" />
            <Button
                onPress={() => AuthServices.logIn(email, password)}
                title="Done"
                color="#841584" />
        </View>
    );
}