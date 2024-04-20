import {View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {BackBtn} from '../../components';

export const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-black">
      <SafeAreaView className="flex">
        <BackBtn />
        <View></View>
      </SafeAreaView>
    </View>
  );
};
