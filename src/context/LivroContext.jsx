import {createContext, useState} from 'react';

export const LivroContext = createContext();

export const LivroProvider = ({children}) => {

    const [livro, setLivro] = useState([])

    return (
        <LivroContext.Provider value={{livro, setLivro}}>
            {children}
        </LivroContext.Provider>
    )
}
