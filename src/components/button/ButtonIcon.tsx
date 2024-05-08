import React from 'react';
import {Text, TouchableOpacity, ViewStyle} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

type ButtonIcon = {
  style?: ViewStyle;
  iconName: string;
  buttonText: string;
  onPress?: () => void;
  disabled?: boolean; // Add this line
};

export const ButtonIcon: React.FC<ButtonIcon> = ({
  style,
  iconName,
  buttonText,
  onPress,
  disabled = false, // And this line
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonIcons,
        style,
        disabled ? styles.disabledButton : null,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.textButtonIcon}>{buttonText}</Text>
      <Icons style={styles.icons} name={iconName} size={25} color={'white'} />
    </TouchableOpacity>
  );
};
