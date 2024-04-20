import {TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export const BackBtn = () => {
  const navigation = useNavigation();
  return (
    <View className="mt-4 ml-4 flex-row justify-start">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="bg-neutral-700  rounded-full">
        <Icons name="arrow-left" size={40} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};
