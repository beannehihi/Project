import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

type InputWithIconProps = {
  placeholder: string;
  iconName: string;
  keyboardType?: String;
  onChangeText?: (text: string) => void;
  value?: string;
  isPassword?: boolean;
};

export const InputWithIcon: React.FC<InputWithIconProps> = ({
  placeholder,
  iconName,
  keyboardType,
  onChangeText,
  value,
  isPassword = false,
}) => {
  const [isSecure, setIsSecure] = useState(isPassword);

  const handlePress = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={styles.container}>
      <Icons name={iconName} size={24} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#D7DBDD'}
        keyboardType={keyboardType as KeyboardTypeOptions}
        style={styles.input}
        secureTextEntry={isSecure}
        onChangeText={text => onChangeText && onChangeText(text)}
        value={value}
      />
      {isPassword && (
        <TouchableOpacity onPress={handlePress} style={styles.eyeIcon}>
          <Icons
            name={isSecure ? 'visibility-off' : 'visibility'}
            size={24}
            color="#D7DBDD"
          />
        </TouchableOpacity>
      )}
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
  eyeIcon: {
    position: 'absolute',
    right: 7,
    top: 2,
    alignItems: 'center',
    padding: 10,
  },
});
