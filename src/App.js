import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import LoginScreen from './app/screens/Login';
import Chatbot from './app/screens/Chatbot'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App(){
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name="Login" 
      component={LoginScreen}
      options={{title: 'Login'}}
      />
      <Stack.Screen 
      name="Chatbot" 
      component={Chatbot}
      options={{title: 'Consultorio'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}