import styled from "styled-components";

const LivroEstilizado = styled.div`
    background-color: whitesmoke;
    border: black 2px solid;
    border-radius: 5px;
    padding-left: 5px;
    margin: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    div {
        display: flex;
        gap: 5px;
        margin-right: 20px;
    }
    
    button {
        cursor: pointer;
        font-family: "Comic Sans MS", sans-serif;
        
        &:hover {
            background-color: deepskyblue;
            border-radius: 3px;
        }
        
    }
    
`

const LivroEmprestado = () => {
    return (
        <>
            <LivroEstilizado>
                <p> 📚 Titulo | Autor | Editora | Dono</p>
                <div>
                    <button>Devolver</button>
                </div>
            </LivroEstilizado>
        </>
    );
};

export default LivroEmprestado
