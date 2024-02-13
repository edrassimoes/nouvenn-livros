import styled from "styled-components";
import LivroGeral from "../../Livros/LivroGeral/index.jsx";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {ContaContext} from "../../../context/ContaContext.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
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
    margin: 0 0 6px 0;
`

const ScrollableDiv = styled.div`
    min-height: fit-content;
    max-height: 475px;
    overflow: auto;
`

const EstanteGeral = (props) => {

    const {sessaoAtual} = useContext(ContaContext);

    return (
        <EstanteEstilizada>
            <TituloEstilizado>📙 Livros disponíveis:</TituloEstilizado>
            <MenssagemEstilizada>Aqui aparecerão somente os livros de outros usuários.</MenssagemEstilizada>
            <ScrollableDiv>
                {props.livros && props.livros.filter(livro => livro.dono =! sessaoAtual.username)
                    .map(livro =>
                    <LivroGeral
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

export default EstanteGeral;