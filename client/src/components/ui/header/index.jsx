import styled from "styled-components";
import ContaPopup from "../pop-ups/info-conta/index.jsx";
import {useNavigate} from "react-router-dom";
import {toast, Toaster} from "sonner";

const HeaderEstilizado = styled.header`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-shadow: 5px 5px 0 black;
    
    p {
        margin: 0;
        font-family: "Comic Sans MS", sans-serif;
        font-size: 20px;
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

const Header = () => {

    const navigate = useNavigate();

    const mudaDePagina = () => {
        navigate('/');
    }

    const handleClick = () => {
        localStorage.clear();
        toast.message('Até a próxima "🖐🏻"');
        setTimeout(mudaDePagina, 1500);
    };

    return (
        <>
            <Toaster richColors position="top-center"/>
            <HeaderEstilizado>
                <p>📚 Emprestimo de Livros</p>
                <section>
                    <ContaPopup/>
                    <BotaoSair onClick={handleClick}>SAIR</BotaoSair>
                </section>
            </HeaderEstilizado>
        </>
    );
};

export default Header;