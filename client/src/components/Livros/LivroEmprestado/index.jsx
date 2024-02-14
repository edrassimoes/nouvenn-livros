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
    opacity: 0.33;

    p {
        font-family: "Comic Sans MS", sans-serif;
    }

    div {
        display: flex;
        gap: 5px;
        margin-right: 20px;
        align-items: center;
        
        p {
            color: darkred;
            margin-right: 8px;
        }
        
        @media (max-width: 600px) {
            flex-direction: column;
            margin: 5px 10px;
            p {
                margin: 0;
            }
        }
    }
    
    &:hover {
        opacity: 1;
        
        div > p {
            color: red;
        }
        
    }

`

const LivroEmprestado = ({titulo, autor, idioma, paginas, editora, icone, dono, emprestado}) => {

    return (
        <>
            <LivroEstilizado>
                <p> {icone} Título: {titulo} | Autor: {autor}</p>
                <div>
                    <p><b>Emprestado para:</b> {emprestado}</p>
                    <LivroPopup
                        titulo={titulo}
                        autor={autor}
                        idioma={idioma}
                        paginas={paginas}
                        editora={editora}
                        dono={dono}
                    />
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroEmprestado
