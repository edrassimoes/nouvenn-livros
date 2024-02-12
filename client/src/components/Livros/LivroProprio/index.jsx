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
        @media (max-width: 600px) {
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }

    p {
        font-family: "Comic Sans MS", sans-serif;
    }


`

const BotaoRemover = styled.button`
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    border: 1px solid black;
    border-radius: 3px;
    &:hover {
        background-color: red;
        color: white;
        scale: 1.1;
    }
`

const LivroProprio = ({ titulo, autor, idioma, paginas, editora, icone, dono }) => {
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
                    <BotaoRemover>Remover</BotaoRemover>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroProprio
