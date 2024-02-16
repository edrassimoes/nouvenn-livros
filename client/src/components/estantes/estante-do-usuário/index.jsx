import styled from "styled-components";
import CadastroPopup from "../../ui/pop-ups/cadastro-de-livros/index.jsx";
import LivroProprio from "../../livros/livro-próprio/index.jsx";
import {useContext, useState} from "react";
import {ContaContext} from "../../../context/conta-context.jsx";
import LivroEmprestado from "../../livros/livro-emprestado/index.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
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
    border-bottom: 2px dotted darkred;
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

const EstanteConta = (props) => {

    const {data} = useContext(ContaContext);

    return (
        <EstanteEstilizada>
            <TituloEstilizado>📕 Meus livros</TituloEstilizado>
            <CadastroPopup/>
            {props.livros && props.livros.filter(livro => livro.dono === data.username && !livro.emprestado)
                .map(livro =>
                    <LivroProprio
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
                )
            }
            {props.emprestimos && props.emprestimos.filter(emprestimo => emprestimo.owner_username === data.username && emprestimo.emprestado)
                .map(livro =>
                    <LivroEmprestado
                        key={livro.id}
                        id={livro.id}
                        titulo={livro.titulo}
                        autor={livro.autor}
                        idioma={livro.idioma}
                        paginas={livro.paginas}
                        editora={livro.editora}
                        icone={livro.icone}
                        dono={livro.dono}
                        emprestado={livro.borrower_username}
                    />
                )
            }
            <section>
                <MenssagemEstilizada>〰 Aqui aprecerão todos os livros que você cadastrou. 〰</MenssagemEstilizada>
            </section>
        </EstanteEstilizada>
    );
};

export default EstanteConta;