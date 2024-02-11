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

    button {
        cursor: pointer;
        font-family: "Comic Sans MS", sans-serif;

        &:hover {
            background-color: yellow;
            border-radius: 3px;
        }

    }
    
    p {
        font-family: "Comic Sans MS", sans-serif;
    }
    
`

const LivroGaleria = ({titulo, autor, idioma, paginas, editora, icone, dono }) => {
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
                    <button>Solicitar</button>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroGaleria
