import Popup from "reactjs-popup";
import styled from "styled-components";
import {useContext, useState} from "react";
import Input from "../../input/index.jsx";
import Radio from "../../radio/index.jsx";
import axios from "axios";
import {ContaContext} from "../../../../context/conta-context.jsx";
import {toast, Toaster} from "sonner";

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
    font-family: "Comic Sans MS", sans-serif;
    margin: 7px;

    &:hover {
        background-color: lightgreen;
        scale: 1.05;
    }

`
const BotaoFechar = styled.button`
    font-family: "Comic Sans MS", sans-serif;
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
        background: lightgreen;
        scale: 1.1;
    }

`

const CadastroPopup = () => {

    const {data} = useContext(ContaContext);

    const [livro, setLivro] = useState({
        titulo: "",
        autor: "",
        idioma: "",
        paginas: "",
        editora: "",
        dono: "",
        icone: ""
    })

    const adicionarLivro = async () => {
        try {
            await axios.post('http://localhost:3000/api/v1/livros', {
                ...livro,
                dono: data.username
            });
            setLivro(prevLivro => ({
                ...prevLivro,
                dono: data.username
            }));
        } catch (error) {
            console.log(error.response);
        }
    }

    const handleChange = (field, value) => {
        setLivro(prevLivro => ({
            ...prevLivro,
            [field]: value
        }));
    }

    const handleChangePaginas = (value) => {
        if (!isNaN(value)) {
            setLivro(livro => ({
                ...livro,
                paginas: value
            }));
        } else {
            toast.error('"Número de páginas" precisa ser um número.')
        }
    }

    const recarregaPagina = () => {
        window.location.reload();
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        if (
            livro.titulo.trim() === '' ||
            livro.autor.trim() === '' ||
            livro.idioma.trim() === '' ||
            livro.paginas.trim() === '' ||
            livro.editora.trim() === '' ||
            livro.icone.trim() === ''
        ) {
            toast.warning('Por favor, preencha todos os campos.');
            return;
        }
        adicionarLivro();
        toast.success('Livro cadastrado com sucesso! 📚');
        setTimeout(recarregaPagina, 1500);
    }

    return (
        <>
            <Toaster richColors position={"top-center"}/>
            <StyledPopup trigger={<BotaoCadastro>📋 Cadastrar um novo livro</BotaoCadastro>} modal closeOnDocumentClick={false}>
                {close => (
                    <div>
                        <BotaoFechar title="Fechar" onClick={() => {close()}}>X</BotaoFechar>
                        <h3>📋 Cadrastrar um novo livro</h3>
                        <form onSubmit={handleSubmit}>
                            <Input
                                label="Titulo:"
                                valor={livro.titulo}
                                aoAlterar={(value) => handleChange('titulo', value)}
                            />
                            <Input
                                label="Autor:"
                                valor={livro.autor}
                                aoAlterar={(value) => handleChange('autor', value)}
                            />
                            <Input
                                label="Idioma:"
                                valor={livro.idioma}
                                aoAlterar={(value) => handleChange('idioma', value)}
                            />
                            <Input
                                label="Número de páginas:"
                                valor={livro.paginas}
                                aoAlterar={(value) => handleChangePaginas(value)}
                            />
                            <Input
                                label="Editora:"
                                valor={livro.editora}
                                aoAlterar={(value) => handleChange('editora', value)}
                            />
                            <SelecaoEstilizada>
                                <legend>Escolha um icone 🎨</legend>
                                <Radio
                                    id="Vermelho"
                                    valor="🔴"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Laranja"
                                    valor="🟠"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Amarelo"
                                    valor="🟡"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Verde"
                                    valor="🟢"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Azul"
                                    valor="🔵"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Roxo"
                                    valor="🟣"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Marrom"
                                    valor="🟤"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Preto"
                                    valor="⚫"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                                <Radio
                                    id="Branco"
                                    valor="⚪"
                                    aoAlterar={(value) => handleChange('icone', value)}
                                />
                            </SelecaoEstilizada>
                            <BotaoSubmit type="submit" onClick={handleSubmit}/>
                        </form>
                    </div>
                )}
            </StyledPopup>
        </>
    );
};

export default CadastroPopup;