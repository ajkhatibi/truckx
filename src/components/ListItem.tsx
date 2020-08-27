import React from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import { Data } from '../../data';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { actionTypes, dispatchToAction } from '../actions';
import { STORE } from '../reducers';

export default function ListItem(props: Data) {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const state = useSelector((state: STORE) => state.appReducer)
    const isInCart = state.cart.map(item => item.name).includes(props.name);
    const addToCart = () => {
        dispatch(dispatchToAction(actionTypes.ADD_TO_CART, props));
        Alert.alert("Sucess!", `You just added ${props.name} to your cart`)
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: props.image }} style={styles.image} />
            <Text>{props.name}</Text>
            <Button onPress={() => navigation.navigate("Detail", { ...props })} title='Details' />
            <Button disabled={isInCart} onPress={addToCart} title='Add To Cart' />
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
