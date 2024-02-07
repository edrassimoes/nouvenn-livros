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

const Banner = () => {

    const {livros} = useContext(LivroContext)

    return (
        <ContainerImagem>
            <img src="/assets/bookshelf.png" alt=""/>
            {livros.length > 0 ? null : <p>Não há livros em nossa coleção no momento 🙁</p>}
        </ContainerImagem>
    );
};

export default Banner;