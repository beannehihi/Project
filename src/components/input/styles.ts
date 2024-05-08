import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
