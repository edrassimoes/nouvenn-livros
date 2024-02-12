import Popup from "reactjs-popup";
import styled from "styled-components";
import {useState} from "react";
import Input from "../../Input/index.jsx";
import Radio from "../../Radio/index.jsx";
import axios from "axios";

const StyledPopup = styled(Popup)`

    &-overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    div &-content {
        margin: auto;
        background: white;
        outline: 3px solid black;
        border: 8px solid lightgreen;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0 0 3px;
        padding: 10px;
        width: fit-content;
        height: 410px;

        h3 {
            font-family: "Comic Sans MS", sans-serif;
            font-size: 20px;
            margin-right: 5px;
        }

    }
`

const BotaoCadastro = styled.button`

    height: 35px;
    border: 2px solid black;
    border-radius: 3px;
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    margin: 7px;

    &:hover {
        background-color: lightgreen;
        scale: 1.1;
    }

`

const BotaoFechar = styled.button`
    font-family: "Comic Sans MS", sans-serif;
    cursor: pointer;
    position: absolute;
    display: block;
    right: -16px;
    top: -16px;
    border: 2px solid black;
    border-radius: 3px;
    background: red;
    width: 7%;
    height: 7%;

    &:hover {
        scale: 1.3;
    }
`

const SelecaoEstilizada = styled.fieldset`
    margin: 7px 0;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: wheat;

    legend {
        font-family: "Comic Sans MS", sans-serif;
        background-color: white;
        border: 2px solid black;
        border-radius: 3px;
        padding: 2px;
    }

`

const BotaoSubmit = styled.input`

    border: 1px solid black;
    border-radius: 3px;
    font-family: "Comic Sans MS", sans-serif;
    position: absolute;
    right: 10px;

    &:hover {
        cursor: pointer;
        background: lightgreen;
        scale: 1.1;
    }

`

const CadastroPopup = () => {

    const [titulo, setTitulo] = useState('')
    const [autor, setAutor] = useState('')
    const [idioma, setIdioma] = useState('')
    const [paginas, setPaginas] = useState('')
    const [editora, setEditora] = useState('')
    const [icone, setIcone] = useState('')

    const adicionarLivro = async (data) => {
        try {
            const response = await axios.post('http://localhost:1234/api/livros', {data});
            console.log(data)
            console.log(response.data);
        } catch (error) {
            console.log(error.response)
        }
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        let data = {
            titulo: titulo,
            autor: autor,
            idioma: idioma,
            paginas: paginas,
            editora: editora,
            dono: "edras",
            icone: icone
        }
        adicionarLivro(data);
    }

    return (
        <StyledPopup trigger={<BotaoCadastro>📋 Cadastrar um novo livro</BotaoCadastro>} modal closeOnDocumentClick={false}>
            {close => (
                <div>
                    <BotaoFechar title="Fechar" onClick={() => {
                        close()
                    }}>X</BotaoFechar>
                    <h3>📋 Cadrastrar um novo livro</h3>
                    <form onSubmit={handleSubmit}>
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
                            <legend>Escolha um icone 🎨</legend>
                            <Radio
                                id="Vermelho"
                                valor="🔴"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Laranja"
                                valor="🟠"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Amarelo"
                                valor="🟡"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Verde"
                                valor="🟢"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Azul"
                                valor="🔵"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Roxo"
                                valor="🟣"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Marrom"
                                valor="🟤"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Preto"
                                valor="⚫"
                                aoAlterar={icone => setIcone(icone)}
                            />
                            <Radio
                                id="Branco"
                                valor="⚪"
                                aoAlterar={icone => setIcone(icone)}
                            />
                        </SelecaoEstilizada>
                        <BotaoSubmit type="submit"/>
                    </form>
                </div>
            )}
        </StyledPopup>
    );
};

export default CadastroPopup;