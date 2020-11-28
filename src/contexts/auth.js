// Responsável por compartilhar os dados do usuario por toda a aplicacao

import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

// o children esta desconstruindo e repassando o valor
function AuthProvider({children}) {
  const [user, setUser] = useState(null);

  // o signed vai verificar se esta setado um user
  return (
    <AuthContext.Provider value={{signed: !!user, user}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
