import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { STORE } from '../../reducers';
import ListItem from '../../components/ListItem';
import CartItem from '../../components/CartItem';

export default function CartScreen() {
    const data = useSelector((state: STORE) => state.appReducer.cart);
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item, id) => id.toString()}
                renderItem={({ item, index }) => <CartItem {...item} index={index} />}
            />
        </View>
    )
}