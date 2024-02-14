import styled from "styled-components";
import Input from "../Input/index.jsx";

const SearchBarEstilizada = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 5px;
    
    p {
        margin: 0;
        align-self: center;
    }
    
    input {
        font-family: "Comic Sans MS", sans-serif;
        border: 1px solid black;
        border-radius: 3px;
        padding: 5px;
    }
    
    button {
        cursor: pointer;
        border: 1px solid black;
        border-radius: 3px;
        height: 35px;
        
        &:hover {
            background-color: slategray;
            scale: 1.1;
        }
        
    }
    
`

const Index = (props) => {

    return (
        <SearchBarEstilizada>
            <Input
                valor={props.valor}
                aoAlterar={props.aoAlterar}
                placeholder="Busque por um livro"
            />
            <button title="Procurar" onClick={props.aoEnviar}>🔎</button>
        </SearchBarEstilizada>
    );
};

export default Index;