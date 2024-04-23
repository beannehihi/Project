import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

type ButtonIcon = {
  iconName: string;
  buttonText: string;
};

export const ButtonIcon: React.FC<ButtonIcon> = ({iconName, buttonText}) => {
  return (
    <TouchableOpacity style={styles.button}>
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
    backgroundColor: 'rgb(88 28 135)',
    borderRadius: 50,
    paddingVertical: 15,
  },
  text: {
    color: 'white',
    fontWeight: '800',
    fontSize: 19,
    marginRight: 5,
  },
  icons: {
    fontSize: 35,
  },
});
