import styled from "styled-components";
import LivroGaleria from "../Livros/LivroGaleria/index.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
`

const TituloEstilizado = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    padding: 0;
    margin: 0 0 0 7px;
`

const ScrollableDiv = styled.div`
    min-height: fit-content;
    max-height: 475px;
    overflow: auto;
`

const Estante = (props) => {
    return (
        <EstanteEstilizada>
            <TituloEstilizado>Livros disponíveis:</TituloEstilizado>
            <ScrollableDiv>
                {props.livros.map(livro =>
                    <LivroGaleria
                        titulo={livro.titulo}
                        autor={livro.autor}
                        icone={livro.icone}
                    />
                )}
            </ScrollableDiv>
        </EstanteEstilizada>
    );
};

export default Estante;