// Responsável por compartilhar os dados do usuario por toda a aplicacao

import React, {createContext, useState} from 'react';
import firebase from '../services/firebaseConnection';
export const AuthContext = createContext();

// o children esta desconstruindo e repassando o valor
function AuthProvider({children}) {
  const [user, setUser] = useState(null);

    
    async function signUp(nome, email, password) {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
          //transformou a funcao anonima em asyncrona, pois vai pegar o que salvou em AUTH para registrar no USERS
          // se der certo, vai pegar o uid do usuario que foi inserido no firebase
          let uid = value.user.uid;
          await firebase
            .database()
            .ref('users')
            .child(uid)
            .set({
              saldo: 0,
              nome: nome,
            })
            .then(() => {
              let data = {
                uid: uid,
                nome: nome,
                email: value.user.email,
              };
              setUser(data);
            });
          //salva o uid na tabela users com o uid que retornou
        })
        .catch();
    }
    
    
  // o signed vai verificar se esta setado um user
  return (
    <AuthContext.Provider value={{signed: !!user, user}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
