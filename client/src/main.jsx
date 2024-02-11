import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes.jsx'
import ContaProvider from "./context/ContaContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContaProvider>
            <AppRouter/>
        </ContaProvider>
    </React.StrictMode>,
)
