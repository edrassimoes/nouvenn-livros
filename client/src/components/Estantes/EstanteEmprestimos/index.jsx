import styled from "styled-components";
import LivroRecebido from "../../Livros/LivroRecebido/index.jsx";
import {useContext} from "react";
import {ContaContext} from "../../../context/ContaContext.jsx";

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

const EstanteEmprestimos = (props) => {

    const {sessaoAtual} = useContext(ContaContext);

    return (
        <EstanteEstilizada>
            <TituloEstilizado>📘 Livros emprestados:</TituloEstilizado>
            <ScrollableDiv>
                {props.livros && props.livros.filter(livro => (livro.borrower_username === sessaoAtual.username && livro.status === true))
                    .map(livro =>
                    <LivroRecebido
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

export default EstanteEmprestimos;