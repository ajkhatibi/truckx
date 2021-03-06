import { StatusBar } from 'expo-status-bar';
import React from 'react';
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
import DetailScreen from './src/screens/DetailScreen';
import { Ionicons, AntDesign } from '@expo/vector-icons';
//utils
import store from './src/store';
import { navigationRef } from './RootNavigation';
import AuthServices from './src/services/auth';

AuthServices.checkUser();

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
      <NavigationContainer
        ref={navigationRef}
      >
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
          <Stack.Screen
            options={({ navigation }) => ({
              headerTitle: 'Products',
              headerLeft: () => <Ionicons style={{ marginLeft: 10 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} name="ios-menu" size={40} color="black" />,
              headerRight: () => <AntDesign style={{ marginRight: 10 }} onPress={() => navigation.navigate("Cart")} name="shoppingcart" size={40} color="black" />
            })}
            name="Home"
            component={Home}
          />
        </Stack.Navigator>
      </NavigationContainer >
    </Provider>
  );
}

