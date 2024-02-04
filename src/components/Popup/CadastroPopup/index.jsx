import Popup from "reactjs-popup";
import styled from "styled-components";

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
        height: 380px;

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

const InputEstilizado = styled.div`
    
    label {
        display: block;
        margin-top: 3px;
        font-family: "Comic Sans MS", sans-serif;
    }
    
    input {
        border: 2px solid black;
        border-radius: 3px;
        box-sizing: border-box;
        width: 100%;
        font-family: "Comic Sans MS", sans-serif;
    }
    
`

const IconeEstilizado = styled.fieldset`
    margin: 7px 0;
    border: 2px solid black;
    border-radius: 3px;
    display: flex;
    gap: 8px;
    align-items: center;
    
    legend {
        font-family: "Comic Sans MS", sans-serif;
    }
    
    input {
        cursor: pointer;
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

const CadastroPopup = () => {

    const onSubmit = (event) => {
        event.preventDefault()
        console.log('O formulário foi submetido com sucesso!')
    }

    return (
        <StyledPopup trigger={<BotaoCadastro>Cadastrar um livro +</BotaoCadastro>} modal closeOnDocumentClick>
            <div>
                <BotaoFechar title="Fechar">✖</BotaoFechar>
                <h3>📋 Cadrastrar um novo livro</h3>
                <form onSubmit={onSubmit}>
                    <InputEstilizado>
                        <label>Titulo:</label>
                        <input required/>
                        <label>Autor:</label>
                        <input required/>
                        <label>Idioma:</label>
                        <input required/>
                        <label>Número de páginas:</label>
                        <input required/>
                        <label>Editora:</label>
                        <input required/>
                    </InputEstilizado>
                    <IconeEstilizado>
                        <legend>Escolha um icone:</legend>
                        <div>
                            <input type="radio" id="red_book" name="book_icon" value="📕" required/>
                            <label htmlFor="red_book">📕</label>
                        </div>
                        <div>
                            <input type="radio" id="green_book" name="book_icon" value="📗"/>
                            <label htmlFor="green_book">📗</label>
                        </div>
                        <div>
                            <input type="radio" id="blue_book" name="book_icon" value="📘"/>
                            <label htmlFor="blue_book">📘</label>
                        </div>
                        <div>
                            <input type="radio" id="orange_book" name="book_icon" value="📙"/>
                            <label htmlFor="orange_book">📙</label>
                        </div>
                    </IconeEstilizado>
                    <BotaoSubmit type="submit"/>
                </form>
            </div>
        </StyledPopup>
    );
};

export default CadastroPopup;