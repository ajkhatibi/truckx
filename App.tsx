import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
//screens
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import { Ionicons, AntDesign } from '@expo/vector-icons';
//utils
import store from './src/store';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function Home() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            options={({ navigation }) => ({
              headerTitle: 'Products',
              headerLeft: () => <Ionicons onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} name="ios-menu" size={24} color="black" />,
              headerRight: () => <AntDesign onPress={() => navigation.navigate("Cart")} name="shoppingcart" size={24} color="black" />
            })}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer >
    </Provider>
  );
}

