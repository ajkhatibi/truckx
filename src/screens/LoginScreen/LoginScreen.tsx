import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default function LoginScreen(props) {
    return (
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <Button
                onPress={() => props.navigation.navigate("Home")}
                title="Done"
                color="#841584" />
        </View>
    );
}