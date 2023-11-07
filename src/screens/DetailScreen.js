/* eslint-disable prettier/prettier */
// demo  ref forwardRef useimperativehandle
import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';
import Video from 'react-native-video';
const App = props => {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <View>
      <Button title="edit" onPress={() => handleClick()} />
      <TextInput ref={inputRef} style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
