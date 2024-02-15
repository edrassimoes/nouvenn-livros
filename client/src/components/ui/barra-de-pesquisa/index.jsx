import styled from "styled-components";
import {useState} from "react";

const SearchBarEstilizada = styled.form`
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
        border: 2px solid black;
        border-radius: 3px;
        padding: 5px;
        height: 25px;
    }
    
    button {
        border: 2px solid black;
        border-radius: 3px;
        height: 39px;
        
        &:hover {
            background-color: slategray;
            scale: 1.1;
        }
        
    }
    
`

const SearchBar = ({onSearch}) => {

    const [search, setSearch] = useState('')

    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);
        if (searchTerm === '') {
            onSearch('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(search);
    };

    return (
        <SearchBarEstilizada onSubmit={handleSubmit}>
            <label>
                <input
                    type="text"
                    value={search}
                    onChange={handleChange}
                    placeholder="Digite o título do livro"
                    required
                />
            </label>
            <button title="Procurar" type="submit">🔎</button>
        </SearchBarEstilizada>
    );
};

export default SearchBar;