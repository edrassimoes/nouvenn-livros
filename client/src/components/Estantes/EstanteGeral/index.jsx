import styled from "styled-components";
import LivroGeral from "../../Livros/LivroGeral/index.jsx";
import axios from "axios";
import {useEffect, useState} from "react";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
`

const TituloEstilizado = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    padding: 0;
    margin: 0 0 0 7px;
`

const ScrollableDiv = styled.div`
    min-height: fit-content;
    max-height: 475px;
    overflow: auto;
`

const EstanteGeral = () => {

    const [livros, setLivros] = useState([])

    useEffect(() => {
        getTabelaLivros();
    }, []);

    const getTabelaLivros = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/livros');
            setLivros(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <EstanteEstilizada>
            <TituloEstilizado>Livros disponíveis:</TituloEstilizado>
            <ScrollableDiv>
                {livros.map(livro =>
                    <LivroGeral
                        key={livro.id}
                        titulo={livro.titulo}
                        autor={livro.autor}
                        idioma={livro.idioma}
                        paginas={livro.paginas}
                        editora={livro.editora}
                        icone={livro.icone}
                        dono={livro.dono}
                    />
                )}
            </ScrollableDiv>
        </EstanteEstilizada>
    );
};

export default EstanteGeral;