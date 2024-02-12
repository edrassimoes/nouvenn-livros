import styled from "styled-components";

const SearchBarEstilizada = styled.div`
    display: flex;
    gap: 5px;
    
    p {
        margin: 0;
        align-self: center;
    }
    
    input {
        font-family: "Comic Sans MS", sans-serif;
        border: 1px solid black;
        border-radius: 3px;
    }
    
    button {
        cursor: pointer;
        border: 1px solid black;
        border-radius: 3px;
        
        &:hover {
            background-color: slategray;
            scale: 1.1;
        }

        @media (max-width: 600px) {
            display: block;
            border: 1px solid black;
            width: 100%;
            margin-right: 2px;

            &:hover {
                scale: 1;
            }
            
        }
        
    }
    
`

const Index = () => {
    return (
        <SearchBarEstilizada>
            <p>📚</p>
            <input placeholder="Busque por um livro"/>
            <button title="Procurar">🔎</button>
        </SearchBarEstilizada>
    );
};

export default Index;