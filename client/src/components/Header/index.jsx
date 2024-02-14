import styled from "styled-components";
import ContaPopup from "../Popup/ContaPopup/index.jsx";
import {useNavigate} from "react-router-dom";

const HeaderEstilizado = styled.header`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    
    p {
        margin: 0;
        font-family: "Comic Sans MS", sans-serif;
    }

    @media (max-width: 600px) {
        padding: 3px;
        
        p {
            align-self: center;
            margin-left: 20px;
        }
        
    }
    
`
const BotaoSair = styled.button`
    color: red;
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 3px;
    
    &:hover {
        background-color: red;
        color: white;
        scale: 1.1;
    }
    
    @media (max-width: 600px) {
        display: block;
        border: 1px solid black;
        width: 100%;
        margin-top: 2px;
        &:hover {
            scale: 1;
        }
    }
    
`

const Header = (props) => {

    const navigate = useNavigate();

    const mudaDePagina = () => {
        navigate('/');
    }

    const handleClick = () => {
        localStorage.clear();
        props.aoAlterar(true);
        setTimeout(mudaDePagina, 2000);
    };

    return (
        <HeaderEstilizado>
            <p>📚 Emprestimo de Livros</p>
            <section>
                <ContaPopup/>
                <BotaoSair onClick={handleClick}>SAIR</BotaoSair>
            </section>
        </HeaderEstilizado>
    );
};

export default Header;