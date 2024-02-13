import styled from "styled-components";
import LivroPopup from "../../Popup/LivroPopup/index.jsx";
import axios from "axios";

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

const BotaoDevolver = styled.button`
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    border: 1px solid black;
    border-radius: 3px;

    &:hover {
        background-color: deepskyblue;
        scale: 1.1;
    }
`

const LivroRecebido = ({id, titulo, autor, idioma, paginas, editora, icone, dono}) => {

    const devolverLivro = () => {
        axios.delete(`http://localhost:1234/api/v1/emprestimos/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const handleClick = () => {
        devolverLivro();
        window.location.reload();
    }

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
                    <BotaoDevolver onClick={handleClick}>Devolver</BotaoDevolver>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroRecebido
