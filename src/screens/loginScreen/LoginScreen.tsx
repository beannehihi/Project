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

export const LoginScreen: React.FC = () => {
  const [usePhoneNumber, setUsePhoneNumber] = React.useState<boolean>(false);
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
            <InputWithIcon placeholder="Your Email" iconName="mail" />
            <InputWithIcon placeholder="Password" iconName="lock" />
            <Button
              title="sử dụng số điện thoại thay cho cách này"
              onPress={handleLoginPhone}
              style="py-2 px-3 bg-neutral-700 rounded-full "
              textStyle="font-bold text-white text-sm"
            />
          </>
        ) : (
          <>
            <View className="pb-6">
              <Text className="font-bold text-white text-[26px]">
                Số điện thoại của bạn là gì?
              </Text>
            </View>
            <InputWithIcon placeholder="Your Phone number" iconName="phone" />
            <Button
              title="sử dụng email thay cho cách này"
              onPress={handleLoginEmail}
              style="py-2 px-3 bg-neutral-700 rounded-full"
              textStyle="font-bold text-white text-sm"
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
        <ButtonIcon iconName="arrow-right-alt" buttonText="Tiếp tục" />
      </View>
    </SafeAreaView>
  );
};
