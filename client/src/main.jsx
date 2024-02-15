import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './rotas/routes.jsx'
import ContaProvider from "./context/conta-context.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
        <ContaProvider>
            <AppRouter/>
        </ContaProvider>
)
