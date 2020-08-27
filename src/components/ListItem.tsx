import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { Data } from '../../data';

export default function ListItem(props: Data) {
    return (
        <View style={styles.container}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <Text>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 50,
        width: 50
    }
})
