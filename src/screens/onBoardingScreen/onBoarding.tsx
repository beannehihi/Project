import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

export const OnBoarding = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('WelcomeScreen');
  };

  const doneButton = ({...props}) => {
    return (
      <TouchableOpacity
        {...props}
        className="p-[20] bg-purple-900 rounded-l-full">
        <Text className="text-white font-extrabold">Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View className="flex-1  bg-slate-950">
        <Onboarding
          onDone={handleNext}
          onSkip={handleNext}
          DoneButtonComponent={doneButton}
          pages={[
            {
              backgroundColor: '#000',
              image: (
                <LottieView
                  className="w-[300] h-[400]"
                  source={require('../../assets/animation/Animation - 1713280500008.json')}
                  autoPlay
                  loop
                />
              ),
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper lalal',
            },
            {
              backgroundColor: '#000',
              image: (
                <LottieView
                  className="w-[300] h-[400]"
                  source={require('../../assets/animation/Animation - 1713280807827.json')}
                  autoPlay
                  loop
                />
              ),
              title: 'Onboarding',
              subtitle: 'Done with React Native Onboarding Swiper lalal',
            },
          ]}
        />
      </View>
    </>
  );
};
