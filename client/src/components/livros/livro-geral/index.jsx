import styled from "styled-components";
import LivroPopup from "../../ui/pop-ups/info-livro/index.jsx";
import axios from "axios";
import {useContext} from "react";
import {ContaContext} from "../../../context/conta-context.jsx";
import {toast} from "sonner";

const LivroEstilizado = styled.div`
    cursor: pointer;
    background-color: whitesmoke;
    border: black 2px solid;
    border-radius: 5px;
    padding-left: 5px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    &:hover {
        outline: 1px solid black;
    }

    div {
        display: flex;
        gap: 5px;
        margin-right: 20px;
        @media (max-width: 600px) {
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 5px;
            margin-right: 3px;
        }
    }

    p {
        font-family: "Comic Sans MS", sans-serif;
    }
    
    
`
const BotaoSolicitar = styled.button`
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    border: 1px solid black;
    border-radius: 3px;

    &:hover {
        background-color: yellow;
        scale: 1.1;
    }
`

const LivroGeral = ({id, titulo, autor, idioma, paginas, editora, icone, dono}) => {

    const {data} = useContext(ContaContext);

    const addEmprestimo = () => {
        axios.post('http://localhost:1234/api/v1/emprestimos', {
            o_username: dono,
            b_username: data.username,
            book_id: id,
        })
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }

    const recarregaPagina = () => {
        window.location.reload();
    }

    const handleClick = () => {
        addEmprestimo();
        toast.info('Livro solicitado ao dono.');
        setTimeout(recarregaPagina, 1500);
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
                    <BotaoSolicitar onClick={handleClick}>Solicitar</BotaoSolicitar>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroGeral
