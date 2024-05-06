import React from 'react';
import {Text, TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

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
      style={[styles.button, style, disabled ? styles.disabledButton : null]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{buttonText}</Text>
      <Icons style={styles.icons} name={iconName} size={25} color={'white'} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D28D9',
    borderRadius: 50,
    paddingVertical: 9,
  },
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 19,
    marginRight: 5,
  },
  icons: {
    fontSize: 28,
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: 'rgb(64, 64, 64)',
    color: '#D7DBDD',
  },
});
