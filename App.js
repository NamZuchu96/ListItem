import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View } from 'react-native';
import styleCSS from './StyleCSS/StyleCSS';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';


const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}  />
        <Stack.Screen name='Profile' component={Profile} options= {{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


