import styled from "styled-components";

const SearchBarEstilizada = styled.div`
    display: flex;
    gap: 5px;
    
    input {
        font-family: "Comic Sans MS", sans-serif;
    }
    
    button {
        cursor: pointer;
        
        &:hover {
            background-color: slategray;
            border: 2px solid black;
            border-radius: 3px;
        }
        
    }
    
`

const Index = () => {
    return (
        <SearchBarEstilizada>
            <input placeholder="Busque por um livro"/>
            <button title="Procurar">🔎</button>
        </SearchBarEstilizada>
    );
};

export default Index;