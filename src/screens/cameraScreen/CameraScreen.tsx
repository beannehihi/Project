import {SafeAreaView, ActivityIndicator, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

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
      <Camera
        style={{width: '50%', height: '50%'}}
        device={device}
        isActive={true}
      />
    </SafeAreaView>
  );
};
