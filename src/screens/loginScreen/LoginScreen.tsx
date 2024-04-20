import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {InputWithIcon, BackBtn, ButtonIcon} from '../../components';

export const LoginScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-black">
      <BackBtn />
      <View className="flex-1 justify-center items-center px-6 ">
        <View className="pb-6">
          <Text className="font-bold text-white text-[24px]">
            Tài khoản của bạn là gì?
          </Text>
        </View>
        <InputWithIcon placeholder="Your Email" iconName="mail" />
        <InputWithIcon placeholder="Password" iconName="lock" />
        <View className="flex w-full py-10">
          <ButtonIcon iconName="arrow-right-alt" buttonText="Tiếp tục" />
        </View>
      </View>
    </SafeAreaView>
  );
};
