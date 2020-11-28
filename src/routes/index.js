// Vai dizer se o usuario esta logado ou nao
import React, {useContext} from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import {AuthContext, AuthContexto} from '../contexts/auth';

// componente que vai decidir se esta logado
function Routes() {

    const {signed} = useContext(AuthContext);
    // se tiver logado, vai enviar para app, senao vai pra pagina de login
    return signed ? <AppRoutes /> : <AuthRoutes />;

}


export default Routes;