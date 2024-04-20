import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  LoginScreen,
  RegisterScreen,
  onBoarding,
  WelcomeScreen,
} from '../screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen
          name="OnBoarding"
          options={{headerShown: false}}
          component={onBoarding}
        />
        <Stack.Screen
          name="WelcomeScreen"
          options={{headerShown: false}}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="Login"
          options={{headerShown: false}}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
