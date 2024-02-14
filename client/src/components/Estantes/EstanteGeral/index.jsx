import styled from "styled-components";
import LivroGeral from "../../Livros/LivroGeral/index.jsx";
import {useContext, useState} from "react";
import {ContaContext} from "../../../context/ContaContext.jsx";
import SearchBar from "../../SearchBar/index.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
`
const TituloEstilizado = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    padding: 0;
    margin: 0 0 3px 7px;
`
const MenssagemEstilizada = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    color: gray;
    align-self: center;
    margin: 10px 0;

    @media (max-width: 600px) {
        font-size: 14px;
    }
    
`
const ScrollableDiv = styled.div`
    min-height: fit-content;
    max-height: 475px;
    overflow: auto;
`

const EstanteGeral = (props) => {

    const {data} = useContext(ContaContext);

    const [busca, setBusca] = useState("")

    const [tabelaBusca, setTabelaBusca] = useState([])

    const handleChange = (value) => {
        setBusca(value);
    }

    const handleSubmit = (evento) => {
        evento.preventDefault();
        const livrosFiltrados = props.livros.filter(livro => livro.titulo === busca);
        setTabelaBusca(livrosFiltrados);
    }

    return (
        <EstanteEstilizada>
            <TituloEstilizado>📙 Livros disponíveis:</TituloEstilizado>
            <SearchBar
                valor={busca}
                aoAlterar={handleChange}
                aoEnviar={handleSubmit}
            />
            <ScrollableDiv>
                {tabelaBusca ? props.livros.filter(livro => livro.dono !== data.username && !livro.emprestado)
                    .map(livro =>
                    <LivroGeral
                        key={livro.id}
                        id={livro.id}
                        titulo={livro.titulo}
                        autor={livro.autor}
                        idioma={livro.idioma}
                        paginas={livro.paginas}
                        editora={livro.editora}
                        icone={livro.icone}
                        dono={livro.dono}
                    />
                ) : tabelaBusca}
            </ScrollableDiv>
            <MenssagemEstilizada>〰 Aqui aparecerão somente os livros de outros usuários. 〰</MenssagemEstilizada>
        </EstanteEstilizada>
    );
};

export default EstanteGeral;