import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: '#6D28D9',
    borderRadius: 9999,
    marginBottom: 12,
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },

  // IconsButton
  buttonIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6D28D9',
    borderRadius: 50,
    paddingVertical: 9,
  },
  textButtonIcon: {
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
