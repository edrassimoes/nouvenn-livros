import Popup from "reactjs-popup";
import styled from "styled-components";

const BotaoUsuario = styled.button`
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    margin-right: 5px;

    &:hover {
        background-color: orange;
        border: 2px solid black;
        border-radius: 3px;
        font-weight: bold;
    }
    
    &:focus {
        background-color: orange;
        border: 2px solid black;
        border-radius: 3px;
        font-weight: bold;
    }

    @media (max-width: 600px) {
        display: block;
        width: 100%;
    }
    
`

const StyledPopup = styled(Popup)`
    
    div &-content {
        margin: auto;
        background: white;
        border: 2px solid black;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.16) 0 0 3px;
        padding: 10px;
        
        p {
            font-family: "Comic Sans MS", sans-serif;
        }
        
        
    }
    
    &-arrow {
        color: black;
    }
    
`

const ContaPopup = () => {
    return (
        <StyledPopup trigger={<BotaoUsuario>Minhas informações 👤</BotaoUsuario>} closeOnDocumentClick>
            <div>
                <p>Nome de usuário: edrassimoes</p>
                <p>Senha: 123</p>
            </div>
        </StyledPopup>
    );
};

export default ContaPopup;