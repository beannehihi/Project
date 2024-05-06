import {Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackBtn, Button, ButtonIcon, InputWithIcon} from '../../components';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const STEP = {
  EMAIL: 0,
  PASSWORD: 1,
  PHONE_NUMBER: 2,
  NAME: 3,
};

export const RegisterScreen = () => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fistName, setfistName] = useState('');
  const [lastName, setlastName] = useState('');

  const navigation = useNavigation();

  const fadeAnim = useSharedValue(1);

  const handleValidate = () => {
    if (step === STEP.EMAIL) {
      if (email === '' || !email.includes('.com')) {
        return false;
      }
    } else if (step === STEP.PASSWORD) {
      if (password === '') {
        return false;
      }
    } else if (step === STEP.PHONE_NUMBER) {
      if (phoneNumber.length !== 10) {
        return false;
      }
    } else if (step === STEP.NAME) {
      if (fistName === '' || lastName === '') {
        return false;
      }
    }
    return true;
  };

  const isComplete = handleValidate();

  const handleContinue = () => {
    fadeAnim.value = withTiming(0, {duration: 200}, () => {
      if (step < 3) {
        runOnJS(setStep)(step + 1);
      } else {
        runOnJS(navigation.navigate)('WelcomeScreen');
      }
      fadeAnim.value = withTiming(1, {duration: 200}); // Add this line
    });
  };

  const handleBack = () => {
    fadeAnim.value = withTiming(0, {duration: 200}, () => {
      if (step > 0) {
        runOnJS(setStep)(step - 1);
      }
      fadeAnim.value = withTiming(1, {duration: 200}); // Add this line
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
        style={animatedStyles}
        className="flex-1 justify-center items-center px-6 pt-10">
        {step === STEP.EMAIL && (
          <>
            <View className="pb-6">
              <Text className="font-bold text-white text-[26px]">
                Email của bạn là gì?
              </Text>
            </View>
            <InputWithIcon
              placeholder="Địa chỉ Email"
              iconName="mail"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </>
        )}
        {step === STEP.PASSWORD && (
          <>
            <View className="pb-6">
              <Text className="font-bold text-white text-[26px]">
                Mật khẩu của bạn là gì?
              </Text>
            </View>
            <InputWithIcon
              placeholder="Mật khẩu"
              iconName="lock"
              keyboardType="default"
              isPassword={true}
              value={password}
              onChangeText={setPassword}
            />
            <Button
              style={{
                paddingVertical: 9,
                paddingHorizontal: 12,
                backgroundColor: 'rgb(64 64 64)',
              }}
              textStyle={{fontSize: 14}}
              title="Quay lại bước trước"
              onPress={handleBack}
            />
          </>
        )}
        {step === STEP.PHONE_NUMBER && (
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
              value={phoneNumber}
              onChangeText={setPhoneNumber}
            />
            <Button
              style={{
                paddingVertical: 9,
                paddingHorizontal: 12,
                backgroundColor: 'rgb(64 64 64)',
              }}
              textStyle={{fontSize: 14}}
              title="Quay lại bước trước"
              onPress={handleBack}
            />
          </>
        )}
        {step === STEP.NAME && (
          <>
            <View className="pb-6">
              <Text className="font-bold text-white text-[26px]">
                Tên của bạn là gì?
              </Text>
            </View>
            <InputWithIcon
              placeholder="Họ"
              iconName="view-comfortable"
              keyboardType="default"
              value={fistName}
              onChangeText={setfistName}
            />
            <InputWithIcon
              placeholder="Tên"
              iconName="view-comfortable"
              keyboardType="default"
              value={lastName}
              onChangeText={setlastName}
            />
            <Button
              style={{
                paddingVertical: 9,
                paddingHorizontal: 12,
                backgroundColor: 'rgb(64 64 64)',
              }}
              textStyle={{fontSize: 14}}
              title="Quay lại bước trước"
              onPress={handleBack}
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
          iconName={step < STEP.NAME ? 'arrow-right-alt' : 'thumb-up-off-alt'}
          buttonText={step < STEP.NAME ? 'Tiếp tục' : 'Hoàn tất'}
          onPress={handleContinue}
          disabled={!isComplete}
        />
      </View>
    </SafeAreaView>
  );
};
