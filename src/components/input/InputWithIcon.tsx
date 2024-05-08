import React, {useState} from 'react';
import {
  View,
  TextInput,
  KeyboardTypeOptions,
  TouchableOpacity,
} from 'react-native';
import {styles} from './styles';
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
