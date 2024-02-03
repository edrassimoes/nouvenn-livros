import styled from "styled-components";
import Livro from "../LivroGaleria/index.jsx";
import LivroSolicitado from "../LivroSolicitado/index.jsx";
import LivroProprio from "../LivroProprio/index.jsx";
import LivroEmprestado from "../LivroEmprestado/index.jsx";

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

const BotaoCadastro = styled.button`
    border-radius: 3px;
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    margin: 7px;
    
    &:hover {
        background-color: lightgreen;
    }
    
`

const EstanteConta = () => {
    return (
        <EstanteEstilizada>
            <TituloEstilizado>Meus livros</TituloEstilizado>
            <BotaoCadastro>Cadastrar um livro +</BotaoCadastro>
            <LivroProprio/>
        </EstanteEstilizada>
    );
};

export default EstanteConta;