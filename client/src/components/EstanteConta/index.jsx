import styled from "styled-components";
import CadastroPopup from "../Popup/CadastroPopup/index.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
`

const TituloEstilizado = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    padding: 0;
    margin: 0 0 0 7px;
`

const EstanteConta = (props) => {
    return (
        <EstanteEstilizada>
            <TituloEstilizado>Meus livros</TituloEstilizado>
            <CadastroPopup
                aoCadastrarLivro={props.aoCadastrarLivro}
            />
        </EstanteEstilizada>
    );
};

export default EstanteConta;