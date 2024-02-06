import styled from "styled-components";
import Header from "../Header/index.jsx";
import Estante from "../Estante/index.jsx";
import EstanteConta from "../EstanteConta/index.jsx";
import Banner from "../Banner/index.jsx";
import {useState} from "react";

const ContainerEstilizado = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
`

const BoxEstilizado = styled.div`
    width: 95%;
    background-color: lightsteelblue;
    border: black 2px solid;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px;
`

const Container = () => {

    const [livros, setLivros] = useState([])
    
    return (
        <>
            <ContainerEstilizado>
                <BoxEstilizado>
                    <Header/>
                    <Banner/>
                    <Estante
                        livros={livros}
                    />
                </BoxEstilizado>
                <BoxEstilizado>
                    <EstanteConta
                        // Ao passar os livros para as estantes, filtrar a propriedade que deseja!
                        aoCadastrarLivro = {livro => setLivros([...livros, livro])}
                    />
                </BoxEstilizado>
            </ContainerEstilizado>
        </>

    );
};

export default Container;