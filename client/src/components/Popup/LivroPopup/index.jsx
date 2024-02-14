import Popup from "reactjs-popup";
import styled from "styled-components";
import {useState} from "react";

const BotaoInfo = styled.button`
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    margin-right: 5px;
    border: 1px solid black;
    border-radius: 3px;

    &:hover {
        background-color: slategray;
        scale: 1.1;
    }

    @media (max-width: 600px) {
        align-self: stretch;
    }

`

const StyledPopup = styled(Popup)`

    &-overlay {
        background-color: rgba(0, 0, 0, 0.5);
    }

    div &-content {
        margin: auto;
        background: white;
        outline: 3px solid black;
        border: 5px solid slategray;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0 0 3px;
        padding: 20px;
        width: fit-content;
        height: fit-content;

        button {
            font-family: "Comic Sans MS", sans-serif;
            cursor: pointer;
            position: absolute;
            display: block;
            line-height: 20px;
            right: -12px;
            top: -16px;
            border: 2px solid black;
            border-radius: 3px;
            background: red;

            &:hover {
                scale: 1.3;
            }
        }

        p {
            font-family: "Comic Sans MS", sans-serif;
            margin: 8px;
        }

        b {
            font-size: 18px;
        }

        section {
            
            p {
                border: 3px dotted black;
                border-radius: 10px;
                padding: 10px;
                margin: 20px 0 0 0;
                background: lightgray;
            }
            
        }

    }
`

const LivroPopup = ({titulo, autor, paginas, editora, dono}) => {

    return (
        <StyledPopup trigger={<BotaoInfo title="Informações">📖</BotaoInfo>} modal closeOnDocumentClick={false}>
            {close => (
                <div>
                    <button title="Fechar" onClick={() => {close()}}>X</button>
                    <p><b>📖 Informações sobre este livro:</b></p>
                    <p>-----------------------------------------------</p>
                    <p><b>Título:</b> {titulo}</p>
                    <p><b>Autor:</b> {autor}</p>
                    <p><b>Número de páginas:</b> {paginas}</p>
                    <p><b>Editora:</b> {editora}</p>
                    <section>
                        <p><b>👤 Dono: </b>{dono}</p>
                    </section>
                </div>
            )}
        </StyledPopup>
    );
};

export default LivroPopup;