import styled from "styled-components";
import LivroPopup from "../../ui/pop-ups/info-livro/index.jsx";
import axios from "axios";
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

    section {
        display: flex;
        gap: 5px;
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

const LivroSolicitado = ({id, titulo, autor, idioma, paginas, editora, icone, dono}) => {

    const aprovarSolicitacao = () => {
        axios.put(`http://localhost:1234/api/v1/livros/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    const negarSolicitacao = () => {
        axios.delete(`http://localhost:1234/api/v1/emprestimos/${id}`)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    const recarregaPagina = () => {
        window.location.reload();
    }

    const aprovarClick = () => {
        aprovarSolicitacao();
        toast.info('Empréstimo aprovado.');
        setTimeout(recarregaPagina, 1500);
    }

    const negarClick = () => {
        negarSolicitacao();
        toast.info('Empréstimo negado.');
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
                    <section>
                        <BotaoAceitar title="Aprovar" onClick={aprovarClick}>✔</BotaoAceitar>
                        <BotaoNegar title="Negar" onClick={negarClick}>X</BotaoNegar>
                    </section>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroSolicitado
