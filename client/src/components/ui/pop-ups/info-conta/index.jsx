import Popup from "reactjs-popup";
import styled from "styled-components";
import {useContext} from "react";
import {ContaContext} from "../../../../context/conta-context.jsx";

const StyledPopup = styled(Popup)`
    
    div &-content {
        height: 130px;
        margin-top: 8px;
        background: white;
        outline: 3px solid black;
        border: 5px solid orange;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0 0 3px;
        padding: 10px;
        
        p {
            font-family: "Comic Sans MS", sans-serif;
        }

        button {
            background-color: red;
            font-family: "Comic Sans MS", sans-serif;
            position: absolute;
            display: block;
            line-height: 20px;
            right: 6px;
            bottom: 6px;
            border: 1px solid black;
            border-radius: 3px;
            &:hover {
                scale: 1.1;
            }
        }
    }
    
    &-arrow {
        color: black;
        position: relative;
        top: -12px;
        width: 30px;

        @media (max-width: 600px) {
            position: relative;
            left: 70px;
        }
        
    }
    
`
const BotaoUsuario = styled.button`
    font-family: "Comic Sans MS", sans-serif;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 3px;

    &:hover {
        background-color: orange;
        scale: 1.1;
    }
    
    &:focus {
        background-color: orange;
        scale: 1.1;
    }

    @media (max-width: 600px) {
        display: block;
        border: 1px solid black;
        width: 100%;
        &:hover {
            scale: 1;
        }
    }
    
`

const ContaPopup = () => {

    const {data} = useContext(ContaContext);

    return (
        <StyledPopup trigger={<BotaoUsuario>Minhas informações 👤</BotaoUsuario>} closeOnDocumentClick={false}>
            {close => (
                <div>
                    <p><b>Nome de usuário: </b>{data.username}</p>
                    <p><b>E-mail: </b>{data.email}</p>
                    <p><b>Senha: </b>{data.password}</p>
                    <button title="Fechar" onClick={() => {close()}}>X</button>
                </div>
            )}
        </StyledPopup>
    );
};

export default ContaPopup;