import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


const InputText = React.forwardRef((props, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => setIsFocused(false);

  const labelStyle = {
    position: 'absolute',
    zIndex: -1,
    left: !isFocused && !props.value ? 5 : 0,
    top: !isFocused && !props.value ? 42 : 12,
    fontSize: !isFocused ? 15 : 15,
    color: !isFocused ? "#1e1e1e" : "#1e1e1e",
    fontWeight: !isFocused ? '700' : '700'
  };

  const disabled = !props.editable;

  return (
    <View style={[{ paddingTop: 10, ...props.style }]}>
      <TextInput
        placeholderTextColor={"#0f0e0e"}
        multiline={props.multiline}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={ref}
        {...props}
        style={[styles.input, disabled && { color: 'gray' }]}
      />
      <Text style={labelStyle}>
        {props.label}
        {props.asterisk && <Text style={{ color: 'red' }}> *</Text>}
      </Text>
      <View
        style={[
          { height: StyleSheet.hairlineWidth, width: 300 },
          disabled
            ? {
                borderBottomWidth: 2,
                // borderStyle: 'dashed',
                borderBottomColor: '#55a83e',
              
              }
            : {
                backgroundColor:
                  !props.valid && props.touched
                    ? 'red'
                    : '#55a83e',
              },
        ]}
      />
      {!props.valid && props.touched ? (
        <Text
          style={{
            position: 'absolute',
            bottom: -15,
            fontSize: 10,
            color: 'red',
            paddingTop: 5,
          }}
        >
          {props.errorText}
        </Text>
      ) : null}
    </View>
  );
});

const styles = {
  input: {
    height: 40,
    marginTop: 40,
    paddingLeft: 5,
    padding: 0,
    margin: 0,
  },
};

export default InputText;
