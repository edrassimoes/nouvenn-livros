import Popup from "reactjs-popup";
import styled from "styled-components";
import {useContext, useState} from "react";
import Input from "../../Input/index.jsx";
import Radio from "../../Radio/index.jsx";
import {LivroContext} from "../../../context/LivroContext.jsx";

const StyledPopup = styled(Popup)`

    &-overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    div &-content {
        margin: auto;
        background: white;
        border: 2px solid black;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0 0 3px;
        padding: 10px;
        width: fit-content;
        height: 405px;

        h3 {
            font-family: "Comic Sans MS", sans-serif;
            font-size: 20px;
            margin-right: 5px;
        }

    }
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

const BotaoFechar = styled.button`
    cursor: pointer;
    position: absolute;
    display: block;
    line-height: 20px;
    right: -5px;
    top: -10px;
    border: 2px solid black;
    border-radius: 3px;
    background: red;
`

const SelecaoEstilizada = styled.fieldset`
    margin: 7px 0;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    gap: 8px;
    align-items: center;
    
    legend {
        font-family: "Comic Sans MS", sans-serif;
    }
    
`

const BotaoSubmit = styled.input`
    border: 2px solid black;
    border-radius: 3px;
    font-family: "Comic Sans MS", sans-serif;
    position: absolute;
    right: 10px;
    
    &:hover {
        cursor: pointer;
        background: lightgreen;
    }
    
`

const CadastroPopup = (props) => {

    const {
        livros, setLivros,
        titulo, setTitulo,
        autor, setAutor,
        idioma, setIdioma,
        paginas, setPaginas,
        editora, setEditora,
        icone, setIcone
    } = useContext(LivroContext)

    const onSubmit = (evento) => {
        evento.preventDefault()
        adicionarLivro({
            titulo,
            autor,
            idioma,
            paginas,
            editora,
            icone
        })
    }

    function adicionarLivro(novoLivro) {
        return setLivros([...livros, novoLivro])
    }

    return (
        <StyledPopup trigger={<BotaoCadastro>Cadastrar um livro +</BotaoCadastro>} modal>
                <BotaoFechar title="Fechar">✖</BotaoFechar>
                <h3>📋 Cadrastrar um novo livro</h3>
                <form onSubmit={onSubmit}>
                    <Input
                        label="Titulo:"
                        valor={titulo}
                        aoAlterar={valor => setTitulo(valor)}
                    />
                    <Input
                        label="Autor:"
                        valor={autor}
                        aoAlterar={valor => setAutor(valor)}
                    />
                    <Input
                        label="Idioma:"
                        valor={idioma}
                        aoAlterar={valor => setIdioma(valor)}
                    />
                    <Input
                        label="Número de páginas:"
                        valor={paginas}
                        aoAlterar={valor => setPaginas(valor)}
                    />
                    <Input
                        label="Editora:"
                        valor={editora}
                        aoAlterar={valor => setEditora(valor)}
                    />
                    <SelecaoEstilizada>
                        <legend>Escolha um icone:</legend>
                        <Radio
                            id="red_book"
                            valor="📕"
                            aoAlterar={icone => setIcone(icone)}
                        />
                        <Radio
                            id="green_book"
                            valor="📗"
                            aoAlterar={icone => setIcone(icone)}
                        />
                        <Radio
                            id="blue_book"
                            valor="📘"
                            aoAlterar={icone => setIcone(icone)}
                        />
                        <Radio
                            id="orange_book"
                            valor="📙"
                            aoAlterar={icone => setIcone(icone)}
                        />
                    </SelecaoEstilizada>
                    <BotaoSubmit type="submit"/>
                </form>
        </StyledPopup>
    );
};

export default CadastroPopup;