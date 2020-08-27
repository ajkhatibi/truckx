import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Data } from '../../../data';

export default function CartScreen({ route: { params } }: { route: { params: Data } }) {

    return (
        <View style={styles.container}>
            <Image source={{ uri: params.image }} style={styles.image} />
            <Text>{params.name}</Text>
            <Text>{params.desc}</Text>
            <Text>{params.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100
    }
})