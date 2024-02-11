import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  StyleSheet,
  Alert,
} from 'react-native';


const Button = ({
  style = null,
  disabled = false,
  onPress,
  title = null,
  children,
}) => {
  return (
    <TouchableHighlight
      onPress={!disabled ? onPress : () => {}}
      style={[{ borderRadius: 10 }, style]}
    >
      <View
        style={styles.solidBg }>
        {title ? (
          <Text
            style={styles.primaryTxtBtn}>
            {title}
          </Text>
        ) : (
          children
        )}
      </View>
    </TouchableHighlight>
  );
};

export default Button;
const styles = StyleSheet.create({
  whiteBg: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    padding: 10,
  },
  solidBg: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:'#55a83e'
  },
  whitetxtBtn: {
    color: '#55a83e',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  primaryTxtBtn: {
    fontWeight: '500',
    color: '#fff',
    textTransform: 'uppercase',
  },
});
