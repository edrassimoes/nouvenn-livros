import styled from "styled-components";

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
    return (
        <ContainerImagem>
            <img src="/assets/bookshelf.png" alt=""/>
            <p>Não há livros em nossa coleção no momento 🙁</p>
        </ContainerImagem>
    );
};

export default Banner;