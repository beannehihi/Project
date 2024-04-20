import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
  style: string;
  textStyle: string;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} className={style}>
      <Text className={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
