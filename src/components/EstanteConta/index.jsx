import styled from "styled-components";
import LivroProprio from "../Livros/LivroProprio/index.jsx";
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

const EstanteConta = () => {
    return (
        <EstanteEstilizada>
            <TituloEstilizado>Meus livros</TituloEstilizado>
            <CadastroPopup/>
            <LivroProprio/>
        </EstanteEstilizada>
    );
};

export default EstanteConta;