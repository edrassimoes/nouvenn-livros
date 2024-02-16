import styled from "styled-components";
import LivroSolicitado from "../../livros/livro-solicitado/index.jsx";
import {useContext} from "react";
import {ContaContext} from "../../../context/conta-context.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px 10px 40px 10px;
    box-shadow: 5px 5px 0 black;
    section {
        margin: 10px 0;
        display: flex;
        justify-content: center;
    }
`
const TituloEstilizado = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    padding: 5px 0 10px 0;
    margin: 0 0 5px 7px;
    border-bottom: 2px dotted forestgreen;
`
const ScrollableDiv = styled.div`
    min-height: fit-content;
    max-height: 475px;
    overflow: auto;
`
const MenssagemEstilizada = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    color: gray;
    align-self: center;
    margin: 5px 0 0 0;

    @media (max-width: 600px) {
        font-size: 13px;
    }
    
`

const EstanteSolicitacoes = (props) => {

    const {data} = useContext(ContaContext);

    return (
        <EstanteEstilizada>
            <TituloEstilizado>📗 Livros solicitados</TituloEstilizado>
            <ScrollableDiv>
                {props.emprestimos && props.emprestimos.filter(emprestimo => (emprestimo.owner_username === data.username && !emprestimo.emprestado))
                    .map(livro =>
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
            <section>
                <MenssagemEstilizada>〰 Aqui aprecerão todos as solicitações de empréstimos de seus livros. 〰</MenssagemEstilizada>
            </section>
        </EstanteEstilizada>
    );
};

export default EstanteSolicitacoes;