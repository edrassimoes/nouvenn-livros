import {createContext, useState} from 'react';

export const LivroContext = createContext();

export const LivroProvider = ({children}) => {

    // Container
    const [livros, setLivros] = useState([])

    // CadastroPopup
    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [idioma, setIdioma] = useState('')
    const [paginas, setPaginas] = useState('')
    const [editora, setEditora] = useState('')
    const [icone, setIcone] = useState('')

    return (
        <LivroContext.Provider value={{
            livros, setLivros,
            titulo, setTitulo,
            autor, setAutor,
            idioma, setIdioma,
            paginas, setPaginas,
            editora, setEditora,
            icone, setIcone
        }}>
            {children}
        </LivroContext.Provider>
    )
}
