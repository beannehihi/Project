import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {InputWithIcon, BackBtn, ButtonIcon, Button} from '../../components';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [usePhoneNumber, setUsePhoneNumber] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [phoneNumber, setPhoneNumber] = React.useState<string>('');
  const fadeAnim = useSharedValue(1);

  const handleLoginEmail = () => {
    fadeAnim.value = withTiming(0, {duration: 200}, () => {
      runOnJS(setUsePhoneNumber)(false);
      fadeAnim.value = withTiming(1, {duration: 200});
    });
  };

  const handleLoginPhone = () => {
    fadeAnim.value = withTiming(0, {duration: 200}, () => {
      runOnJS(setUsePhoneNumber)(true);
      fadeAnim.value = withTiming(1, {duration: 200});
    });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: fadeAnim.value,
    };
  });

  const handleContinue = () => {
    if (usePhoneNumber) {
      navigation.navigate('OTP'); // Replace 'OTPScreen' with the name of your OTP screen
    }
  };

  const isFormComplete = usePhoneNumber
    ? phoneNumber.length === 10
    : email !== '' && email.includes('.com') && password !== '';

  return (
    <SafeAreaView className="flex-1 bg-black">
      <BackBtn />
      <Animated.View
        style={[animatedStyles]}
        className="flex-1 justify-center items-center px-6 pt-10">
        {!usePhoneNumber ? (
          <>
            <View className="pb-6">
              <Text className="font-bold text-white text-[26px]">
                Tài khoản của bạn là gì?
              </Text>
            </View>
            <InputWithIcon
              placeholder="Địa chỉ Email"
              iconName="mail"
              keyboardType="default"
              onChangeText={setEmail}
            />
            <InputWithIcon
              placeholder="Mật khẩu"
              iconName="lock"
              keyboardType="default"
              isPassword={true}
              onChangeText={setPassword}
            />
            <Button
              title="sử dụng số điện thoại thay cho cách này"
              onPress={handleLoginPhone}
              style={{
                paddingVertical: 9,
                paddingHorizontal: 12,
                backgroundColor: 'rgb(64 64 64)',
              }}
              textStyle={{fontSize: 14}}
            />
          </>
        ) : (
          <>
            <View className="pb-6">
              <Text className="font-bold text-white text-[26px]">
                Số điện thoại của bạn là gì?
              </Text>
            </View>

            <InputWithIcon
              placeholder="Số điện thoại"
              iconName="phone"
              keyboardType="phone-pad"
              onChangeText={setPhoneNumber}
            />

            <Button
              title="sử dụng email thay cho cách này"
              onPress={handleLoginEmail}
              style={{
                paddingVertical: 9,
                paddingHorizontal: 12,
                backgroundColor: 'rgb(64 64 64)',
              }}
              textStyle={{fontSize: 14}}
            />
          </>
        )}
      </Animated.View>

      <View className="flex w-full px-6 pb-2">
        <Text className="text-xs text-gray-400 text-center py-3 ">
          Thông qua việc chạm vào nút Tiếp tục, bạn đồng ý với{' '}
          <Text className="text-white">Điều khoản dịch vụ</Text> và{' '}
          <Text className="text-white">Chính sách quyền riêng tư</Text> của
          chúng tôi
        </Text>
        <ButtonIcon
          style={{backgroundColor: '#6D28D9'}}
          iconName="arrow-right-alt"
          buttonText="Tiếp tục"
          onPress={handleContinue}
          disabled={!isFormComplete}
        />
      </View>
    </SafeAreaView>
  );
};
