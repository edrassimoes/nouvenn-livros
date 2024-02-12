import styled from "styled-components";
import LivroSolicitado from "../../Livros/LivroSolicitado/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

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
    margin: 0 0 3px 7px;
`

const ScrollableDiv = styled.div`
    min-height: fit-content;
    max-height: 475px;
    overflow: auto;
`

const EstanteSolicitacoes = () => {

    const [livros, setLivros] = useState([])

    useEffect(() => {
        const getEmprestimoPeloDono = async () => {
            const response = await axios.get(`http://localhost:1234/api/emprestimos/owner/edras`);
            setLivros(response.data)
        };
        getEmprestimoPeloDono();
    });


    return (
        <EstanteEstilizada>
            <TituloEstilizado>📗 Livros solicitados:</TituloEstilizado>
            <ScrollableDiv>
                {livros.map(livro =>
                    <LivroSolicitado
                        key={livro.id}
                        id={livro.id}
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

export default EstanteSolicitacoes;