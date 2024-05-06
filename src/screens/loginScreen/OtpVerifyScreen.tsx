import {Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {OtpInput} from 'react-native-otp-entry';
import {BackBtn, Button, ButtonIcon} from '../../components';

export const OtpVerifyScreen = () => {
  const [otp, setOtp] = React.useState<string>('');

  return (
    <SafeAreaView className="flex-1 bg-black">
      <BackBtn />
      <View className="flex-1 justify-center items-center px-10 pt-10">
        <View className="pb-6">
          <Text className="font-bold text-white text-[26px]">
            Nhập mã xác nhận !
          </Text>
        </View>
        <OtpInput
          numberOfDigits={4}
          onTextChange={setOtp}
          focusColor="#ffff"
          focusStickBlinkingDuration={500}
          theme={{
            pinCodeContainerStyle: {
              backgroundColor: 'rgb(64 64 64)',
              width: 58,
              height: 58,
              borderRadius: 12,
            },
            pinCodeTextStyle: {
              color: 'white',
            },
          }}
        />
        <View className="flex-row items-center ">
          <Text className=" text-sm text-gray-400 text-center pt-6">
            Không nhận được mã xác nhận?{' '}
          </Text>
          <Button
            title="Gửi lại mã"
            onPress={() => {}} // Add your function here
            style={{
              paddingHorizontal: 1,
              paddingVertical: 1,
              marginTop: 33,
              backgroundColor: 'transparent',
            }}
            textStyle={{fontSize: 14}}
          />
        </View>
      </View>
      <View className="flex w-full px-6 pb-2 ">
        <Text className="text-xs text-gray-400 text-center py-3 ">
          Thông qua việc chạm vào nút Xác nhận, bạn đồng ý với{' '}
          <Text className="text-white">Điều khoản dịch vụ</Text> và{' '}
          <Text className="text-white">Chính sách quyền riêng tư</Text> của
          chúng tôi
        </Text>
        <ButtonIcon
          iconName="thumb-up-alt"
          buttonText="Xác nhận"
          disabled={otp.length < 4}
        />
      </View>
    </SafeAreaView>
  );
};
