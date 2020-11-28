import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import firebase from './src/services/firebaseConnection';
import Routes from './src/routes/index';
import {NavigationContainer} from '@react-navigation/native';
import AuthProvider from './src/contexts/auth';


export default function App() {
  return (
    //navigation container necessario para encapsular menu navegacao
    /* chama o routes, que decide que pagina vai exibir para o usuario 
  
    o AUTHPROVIDER é o que vai compartilhar os dados por toda as aplicacoes, passando pra dentro das rotas
  */

    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

