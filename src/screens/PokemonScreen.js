/* eslint-disable prettier/prettier */
//https://pokeapi.co/api/v2/pokemon/dialga
// https://pokeapi.co/api/v2/pokemon-form/382/
// https://pokeapi.co/api/v2/pokemon/mewtwo
import React, {useEffect, useState} from 'react';
import {StyleSheet, Button, Image, Text, View} from 'react-native';
import axios from 'axios';
import {Provider, useDispatch, useSelector} from 'react-redux';
import store from '../Store';
const App = props => {
  return (
    <Provider store={store}>
      <ChildComponent />
    </Provider>
  );
};

const apiPaths = [
  'https://pokeapi.co/api/v2/pokemon-form/483', //dialge
  'https://pokeapi.co/api/v2/pokemon-form/382/', //koygre
  'https://pokeapi.co/api/v2/pokemon-form/150/', //mewtwo
];

const ChildComponent = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.data);
  const [value, setValue] = useState('');

  const fetchApi = async () => {
    try {
      const response = await axios.get(value);
      console.log('action');
      console.log(response.data);
      const poke = response.data;
      console.log(poke.sprites.back_default);

      console.log('name: ' + poke.name);
      dispatch({type: 'FETCH_DATA_SUCCESS', payload: response.data});
    } catch (error) {
      dispatch({type: 'FETCH_DATA_FAILURE', payload: error});
      console.log('error: ' + error);
    }
  };
  useEffect(() => {
    console.log('useEffect');
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return (
    <View>
      <Button
        title="get Dialga"
        onPress={() => {
          setValue(apiPaths[0]);
        }}
      />
      <Button
        title="get Koygre"
        onPress={() => {
          setValue(apiPaths[1]);
        }}
      />
      <Button
        title="get Mewtwo"
        onPress={() => {
          setValue(apiPaths[2]);
        }}
      />
      {data ? (
        <View>
          <Text style={styles.title}>id: {data.id}</Text>
          <Text style={styles.title}>Pokemon: {data.name}</Text>
          <Image
            style={styles.image}
            source={{
              uri: data.sprites.front_default,
            }}
          />
        </View>
      ) : (
        <Text>Không có dữ liệu</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  image: {width: 200, height: 200},
  title: {fontSize: 20},
});
export default App;
