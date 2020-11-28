import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes/index';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    //navigation container necessario para encapsular menu navegacao
    /* chama o routes, que decide que pagina vai exibir para o usuario */

    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

