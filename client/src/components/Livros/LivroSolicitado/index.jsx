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
    border: 1px solid black;
    border-radius: 3px;
    background-color: lightgreen;
    
    &:hover {
        scale: 1.1;
    }
`

const BotaoNegar = styled.button`
    
    font-family: "Comic Sans MS", sans-serif;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
    background-color: red;
    
    &:hover {
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
                    <section>
                        <BotaoAceitar title="Aprovar">✔</BotaoAceitar>
                        <BotaoNegar title="Negar">X</BotaoNegar>
                    </section>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroSolicitado
