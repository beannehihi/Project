import {SafeAreaView, ActivityIndicator, View} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';
import {styles} from './styles';

export const CameraScreen = () => {
  const device = useCameraDevice('back');

  useEffect(() => {
    checkPermissions();
  }, []);

  const checkPermissions = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    const newMicrophonePermission = await Camera.requestMicrophonePermission();
  };

  if (!device) {
    return <ActivityIndicator />;
  }
  return (
    <SafeAreaView className="flex-1 bg-black justify-center items-center">
      <View className=" rounded-[40px] overflow-hidden">
        <Camera style={styles.CameraLayout} device={device} isActive={true} />
      </View>
    </SafeAreaView>
  );
};
