import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import { Data } from '../../data';
import { useDispatch } from 'react-redux';
import { actionTypes, dispatchToAction } from '../actions';

export default function CartItem(props: Data) {
    const [addQty, setAddQty] = useState(1);
    const dispatch = useDispatch();
    const removeItem = (index: number) => {
        Alert.alert("Warning!", "Are you sure you want to remove this item?",
            [
                { text: 'Yes', onPress: () => dispatch(dispatchToAction(actionTypes.REMOVE_FROM_CART, index)) },
                { text: 'No' }
            ])

    }
    return (
        <View style={styles.container}>
            <View>
                <Image source={{ uri: props.image }} style={styles.image} />
                <Text>{props.name}</Text>
                <Text>{props.price}</Text>
            </View>
            <View style={styles.row}>
                <Text>{addQty}</Text>
                <Button onPress={() => setAddQty(state => state + 1)} title="Add" />
                <Button onPress={() => removeItem(props.index)} title="Remove" />
                <Text>{Math.round((props.price * addQty) * 100) / 100}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    image: {
        width: 50,
        height: 50
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})