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
    
`

const LivroGaleria = () => {
    return (
        <>
            <LivroEstilizado>
                <p> 📚 Titulo | Autor | Editora | Dono</p>
                <div>
                    <LivroPopup/>
                    <button>Solicitar</button>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroGaleria
