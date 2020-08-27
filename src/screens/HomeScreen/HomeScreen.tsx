import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import data from '../../../data';
import ListItem from '../../components/ListItem';

export default function HomeScreen(props) {

    return (
        <View>
            <FlatList
                keyExtractor={(item, id) => id.toString()}
                data={data}
                renderItem={({ item }) => <ListItem {...item} />}
            />
        </View>
    )
}