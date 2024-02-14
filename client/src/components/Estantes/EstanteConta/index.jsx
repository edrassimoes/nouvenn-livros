import styled from "styled-components";
import CadastroPopup from "../../Popup/CadastroPopup/index.jsx";
import LivroProprio from "../../Livros/LivroProprio/index.jsx";
import {useContext, useState} from "react";
import {ContaContext} from "../../../context/ContaContext.jsx";
import LivroEmprestado from "../../Livros/LivroEmprestado/index.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
    
    section {
        margin: 10px 0;
        display: flex;
        justify-content: center;
    }
    
`
const TituloEstilizado = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    padding: 0;
    margin: 0 0 3px 7px;
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
                <MenssagemEstilizada>〰 Aqui aparecerão somente os livros que você não emprestou. 〰</MenssagemEstilizada>
            </section>
        </EstanteEstilizada>
    );
};

export default EstanteConta;