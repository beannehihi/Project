import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  LoginScreen,
  RegisterScreen,
  OnBoarding,
  WelcomeScreen,
  OtpVerifyScreen,
  CameraScreen,
} from '../screens/index';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'#000'} />
      <Stack.Navigator initialRouteName="CameraScreen">
        <Stack.Screen
          name="OnBoarding"
          options={{headerShown: false}}
          component={OnBoarding}
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
          name="OTP"
          options={{headerShown: false}}
          component={OtpVerifyScreen}
        />
        <Stack.Screen
          name="Register"
          options={{headerShown: false}}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="CameraScreen"
          options={{headerShown: false}}
          component={CameraScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
