import styled from "styled-components";
import LivroPopup from "../../Popup/LivroPopup/index.jsx";

const LivroEstilizado = styled.div`
    background-color: whitesmoke;
    border: black 2px solid;
    border-radius: 5px;
    padding-left: 5px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    div {
        display: flex;
        gap: 5px;
        margin-right: 20px;
    }
    
`

const BotaoAceitar = styled.button`
    
    cursor: pointer;
    
    &:hover {
        background-color: white;
        border: 2px solid darkgreen;
        border-radius: 3px;
    }
`

const BotaoNegar = styled.button`
    
    cursor: pointer;
    
    &:hover {
        background-color: white;
        border: 2px solid darkred;
        border-radius: 3px;
    }
`

const LivroSolicitado = () => {
    return (
        <>
            <LivroEstilizado>
                <p> 📚 Titulo | Autor | Editora | Dono</p>
                <div>
                    <LivroPopup/>
                    <BotaoAceitar title="Aprovar">✅</BotaoAceitar>
                    <BotaoNegar title="Negar">❌</BotaoNegar>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroSolicitado
