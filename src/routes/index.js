// Vai dizer se o usuario esta logado ou nao
import React from 'react';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

// componente que vai decidir se esta logado
function Routes() {
    return (
        <AuthRoutes/>
    );

}


export default Routes;