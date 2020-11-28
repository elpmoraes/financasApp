// telas de login, cadastro

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';


const AuthStack = createStackNavigator();


function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Signin"
        component={SignIn}
        options={{headerShown: false}}
      />
      <AuthStack.Screen name="Signup" component={SignUp} />
    </AuthStack.Navigator>
  );


}
  export default AuthRoutes;