import styled from "styled-components";
import SearchBar from "../SearchBar/index.jsx";

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
    }
    
`

const BotaoUsuario = styled.button`
    cursor: pointer;
    font-family: "Comic Sans MS", sans-serif;
    margin-right: 5px;

    &:hover {
        background-color: orange;
        border: 2px solid black;
        border-radius: 3px;
        font-weight: bold;
    }
    
`

const Header = () => {
    return (
        <HeaderEstilizado>
            <SearchBar/>
            <section>
                <BotaoUsuario>Minhas informações 👤</BotaoUsuario>
                <BotaoSair>SAIR</BotaoSair>
            </section>
        </HeaderEstilizado>
    );
};

export default Header;