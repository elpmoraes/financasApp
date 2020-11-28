// telas de login, cadastro

import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

// cria a pilha de menus
const AuthStack = createStackNavigator();


function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Signin"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignUp}
        options={{headerTitle: 'Voltar'}}
      />
    </AuthStack.Navigator>
  );


}
  export default AuthRoutes;