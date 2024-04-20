import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components';

export const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-black">
      <View className="flex-1 flex justify-around items-center ">
        <View className="flex-row justify-center">
          <LottieView
            className="w-[300] h-[400]"
            source={require('../../assets/animation/Animation - 1713344029881.json')}
            autoPlay
            loop
          />
        </View>
        <View className="mx-10 flex justify-center items-center  ">
          <View className="flex flex-row gap-3 mb-5">
            <Image
              className="w-10 h-10"
              source={require('../../assets/image/locket2.jpg')}
            />
            <Text className="font-bold text-4xl text-white ">M.O.M</Text>
          </View>
          <Text className="font-bold text-gray-400 text-[27px] text-center">
            Ảnh trực tiếp từ bạn bè,
          </Text>
          <Text className="font-bold text-gray-400 text-[27px] text-center">
            ngày trên màn hình chính
          </Text>
        </View>
        <View className="mb-9">
          <Button
            title="Tạo một tài khoản"
            onPress={() => navigation.navigate('Register')}
            style="py-4 px-6 bg-purple-900 rounded-full mb-3"
            textStyle="font-bold text-white text-lg"
          />
          <Button
            title="Đăng nhập"
            onPress={() => navigation.navigate('Login')}
            style="items-center"
            textStyle="font-bold text-white text-base"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
