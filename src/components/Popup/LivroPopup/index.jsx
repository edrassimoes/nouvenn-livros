import Popup from "reactjs-popup";
import styled from "styled-components";

const BotaoInfo = styled.button`
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    margin-right: 5px;

    &:hover {
        background-color: orange;
        border: 2px solid black;
        border-radius: 3px;
    }

`

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
        width: 300px;
        height: 250px;

        button {
            cursor: pointer;
            position: absolute;
            display: block;
            line-height: 20px;
            right: -5px;
            top: -10px;
            border: 2px solid black;
            border-radius: 3px;
            background: red;
        }

        p {
            font-family: "Comic Sans MS", sans-serif;
        }

    }
`

const LivroPopup = () => {
    return (
        <StyledPopup trigger={<BotaoInfo title="Informações">...</BotaoInfo>} modal closeOnDocumentClick>
            <div className=".popup-content">
                <button title="Fechar">✖</button>
                <p>📖 Informações sobre este livro:</p>
                <p>Título: O abc</p>
                <p>Autor: Xuxa</p>
                <p>Número de páginas: 123</p>
                <p>Editora: Antofágica</p>
                <p>Dono: edrassimoes</p>
            </div>
        </StyledPopup>
    );
};

export default LivroPopup;