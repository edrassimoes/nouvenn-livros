import styled from "styled-components";
import SearchBar from "../SearchBar/index.jsx";
import ContaPopup from "../Popup/ContaPopup/index.jsx";

const HeaderEstilizado = styled.header`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

const BotaoSair = styled.button`
    color: red;
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    font-weight: bold;
    
    &:hover {
        background-color: red;
        color: white;
        border-radius: 3px;
        scale: 1.1;
    }
    
    @media (max-width: 600px) {
        display: block;
        width: 100%;
    }
    
`

const Header = () => {
    return (
        <HeaderEstilizado>
            <SearchBar/>
            <section>
                <ContaPopup/>
                <BotaoSair>SAIR</BotaoSair>
            </section>
        </HeaderEstilizado>
    );
};

export default Header;