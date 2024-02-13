import styled from "styled-components";
import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import EstanteGeral from "../../components/Estantes/EstanteGeral/index.jsx";
import EstanteConta from "../../components/Estantes/EstanteConta/index.jsx";
import EstanteEmprestimos from "../../components/Estantes/EstanteEmprestimos/index.jsx";
import EstanteSolicitacoes from "../../components/Estantes/EstanteSolicitacoes/index.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const ContainerEstilizado = styled.div`
    width: 100%;
    background-color: ghostwhite;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    margin-top: 5px;
`;

const BoxEstilizado = styled.div`
    width: 96%;
    background-color: lightsteelblue;
    border: black 2px solid;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 8px 10px;
    box-sizing: border-box;
`;

const Home = () => {

    const [livros, setLivros] = useState([])
    const [emprestimos, setEmprestimos] = useState([])

    const getLivros = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/livros');
            setLivros(response.data)
        } catch (error) {
            console.log(error.response)
        }
    };

    const getEmprestimos = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/emprestimos');
            setEmprestimos(response.data)
        } catch (error) {
            console.log(error.response)
        }
    };

    useEffect(() => {
        getLivros();
        getEmprestimos();
    }, []);

    return (
        <div>
            <EstilosGlobais/>
            <ContainerEstilizado>
                <BoxEstilizado>
                    <Header/>
                    <Banner/>
                    <EstanteGeral
                        livros={livros}
                    />
                </BoxEstilizado>
                <BoxEstilizado>
                    <EstanteConta
                        livros={livros}
                    />
                    <EstanteEmprestimos
                        livros={emprestimos}
                    />
                    <EstanteSolicitacoes
                        livros={emprestimos}
                    />
                </BoxEstilizado>
            </ContainerEstilizado>
        </div>
    );
}

export default Home;
