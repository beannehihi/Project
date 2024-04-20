import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

type InputWithIconProps = {
  placeholder: string;
  iconName: string;
};

export const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder,
  iconName,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#D7DBDD'}
        style={styles.input}
      />
      <Icons name={iconName} size={24} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingBottom: 15,
  },
  input: {
    width: '100%',
    backgroundColor: 'rgba(64, 64, 64, 0.5)',
    fontSize: 16,
    fontWeight: '500',
    paddingLeft: 48,
    paddingRight: 12,
    height: 48,
    borderRadius: 12,
    color: 'white',
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 12,
    color: '#E7E1F0',
  },
});
