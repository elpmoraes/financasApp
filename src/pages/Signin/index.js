import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

// utilizado para poder navegar entre as telas
import {useNavigation} from '@react-navigation/native';




export default function Signin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.bg}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <View style={styles.area}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={(texto) => setEmail(texto)}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#FFF"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          onChangeText={(texto) => setPassword(texto)}
        />
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.textoSignup}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(56, 46, 44, 1)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {width: 300, height: 250, tintColor: 'rgba(0, 191, 111, 1)'},
  area: {marginTop: 50, alignItems: 'center', width: '100%'},
  input: {
    backgroundColor: 'rgba(88, 97, 106, 0.6)',
    zIndex: -1,
    width: 300,
    borderWidth: 0.5,
    marginBottom: 8,
    borderRadius: 15,
    width: '80%',
    color: '#FFF',
    fontSize: 20,
  },
  botao: {
    backgroundColor: 'rgba(140, 153, 168, 1)',
    marginTop: 10,
    width: '80%',
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBotao: {color: 'white', fontSize: 25},
  textoSignup: {color: 'white', fontSize: 20},
});
