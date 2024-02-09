import styled from "styled-components";
import {useContext} from "react";
import {LivroContext} from "../../context/LivroContext.jsx";

const ContainerImagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    img {
        margin-top: 10px;
        width: 150px;
    }
    
    p {
        font-family: "Comic Sans MS", sans-serif;
    }
    
`

const Quotes = styled.section`
    
    margin: 10px 0;
   
    p {
        font-style: italic;
        margin: 0;
    }
    
`

const Banner = () => {

    const {livros} = useContext(LivroContext)

    return (
        <ContainerImagem>
            <Quotes>
                <p>"Frase do dia..."</p>
                <p>Autor</p>
            </Quotes>
            <img src="/assets/bookshelf.png" alt=""/>
            {livros.length > 0 ?
                <p>Seja bem-vindo(a) a nossa estante coletiva 😄</p> :
                <p>Não há livros em nossa coleção no momento 🙁</p> }
        </ContainerImagem>
    );
};

export default Banner;