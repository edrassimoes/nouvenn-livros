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

    p {
        font-family: "Comic Sans MS", sans-serif;
    }

`

const BotaoAceitar = styled.button`
    
    cursor: pointer;
    
    &:hover {
        background-color: white;
        border: 2px solid darkgreen;
        border-radius: 3px;
        scale: 1.1;
    }
`

const BotaoNegar = styled.button`
    
    cursor: pointer;
    
    &:hover {
        background-color: white;
        border: 2px solid darkred;
        border-radius: 3px;
        scale: 1.1;
    }
`

const LivroSolicitado = ({ titulo, autor, idioma, paginas, editora, icone, dono }) => {
    return (
        <>
            <LivroEstilizado>
                <p> {icone} Título: {titulo} | Autor: {autor}</p>
                <div>
                    <LivroPopup
                        titulo={titulo}
                        autor={autor}
                        idioma={idioma}
                        paginas={paginas}
                        editora={editora}
                        dono={dono}
                    />
                    <BotaoAceitar title="Aprovar">✅</BotaoAceitar>
                    <BotaoNegar title="Negar">❌</BotaoNegar>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroSolicitado
