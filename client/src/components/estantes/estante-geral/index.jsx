import styled from "styled-components";
import LivroGeral from "../../livros/livro-geral/index.jsx";
import {useContext, useState} from "react";
import {ContaContext} from "../../../context/conta-context.jsx";
import SearchBar from "../../ui/barra-de-pesquisa/index.jsx";

const EstanteEstilizada = styled.div`
    background-color: white;
    border: black 2px solid;
    border-radius: 5px;
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 0 black;
`
const TituloEstilizado = styled.p`
    font-family: "Comic Sans MS", sans-serif;
    padding: 5px 0 10px 0;
    margin: 0 0 5px 7px;
    border-bottom: 2px dotted orangered;
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

    const [tabelaBusca, setTabelaBusca] = useState([]);

    const handleSearch = (search) => {
        const books = props.livros.filter((livro) =>
            livro.titulo.toLowerCase().includes(search.toLowerCase())
        );
        setTabelaBusca(books);
    };

    return (
        <EstanteEstilizada>
            <TituloEstilizado>📙 Livros disponíveis</TituloEstilizado>
            <SearchBar onSearch={handleSearch}/>
            <ScrollableDiv>
                {tabelaBusca.length > 0 ? (
                    tabelaBusca.map(livro => (
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
                    ))
                ) : (
                    props.livros
                        .filter(livro => livro.dono !== data.username && !livro.emprestado)
                        .map(livro => (
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
                        ))
                )}
            </ScrollableDiv>
            <MenssagemEstilizada>〰 Aqui aparecerão somente os livros disponíveis de outros usuários. 〰</MenssagemEstilizada>
        </EstanteEstilizada>
    );
};

export default EstanteGeral;