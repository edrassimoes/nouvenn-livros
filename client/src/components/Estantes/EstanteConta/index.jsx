import styled from "styled-components";
import CadastroPopup from "../../Popup/CadastroPopup/index.jsx";
import LivroProprio from "../../Livros/LivroProprio/index.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

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

const EstanteConta = () => {

    const [livros, setLivros] = useState([])

    useEffect(() => {
        getLivrosPorUsuario();
    }, []);

    const getLivrosPorUsuario = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/livros/conta/edras`);
            setLivros(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <EstanteEstilizada>
            <TituloEstilizado>Meus livros</TituloEstilizado>
            <CadastroPopup/>
            {livros.map(livro =>
                <LivroProprio
                    key={livro.id}
                    titulo={livro.titulo}
                    autor={livro.autor}
                    idioma={livro.idioma}
                    paginas={livro.paginas}
                    editora={livro.editora}
                    icone={livro.icone}
                    dono={livro.dono}
                />
            )}
        </EstanteEstilizada>
    );
};

export default EstanteConta;