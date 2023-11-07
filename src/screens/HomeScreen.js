/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';
const App = props => {
  const nav = props.navigation;
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count => (count += 1));
    }, 1000);
  }, [count]);
  return (
    <View style={styles.container}>
      <Text>Count:{count + ''} </Text>
      <Button onPress={() => nav.navigate('Details')} title="useRef" />
      <Button onPress={() => nav.navigate('Pokemon')} title="api screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
