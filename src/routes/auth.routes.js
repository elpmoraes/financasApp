// telas de login, cadastro

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/Signin';

const AuthStack = createStackNavigator();


function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Signin" component={SignIn} />
    </AuthStack.Navigator>
  );


}
  export default AuthRoutes;