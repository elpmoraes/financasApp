// Responsável por compartilhar os dados do usuario por toda a aplicacao

import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

// o children esta desconstruindo e repassando o valor
function AuthProvider({children}) {
  const [user, setUser] = useState({
    nome: 'Teste',
  });

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
