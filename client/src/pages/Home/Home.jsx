import styled from "styled-components";
import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import {LivroContext} from "../../context/LivroContext.jsx";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import Estante from "../../components/Estante/index.jsx";
import EstanteConta from "../../components/EstanteConta/index.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";

const ContainerEstilizado = styled.div`
    background-color: ghostwhite;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
`;

const BoxEstilizado = styled.div`
    width: 95%;
    background-color: lightsteelblue;
    border: black 2px solid;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 8px 10px;
`;

const Home = () => {

    const {livros, setLivros} = useContext(LivroContext);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/livros');
            setLivros(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <EstilosGlobais/>
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
                    />
                </BoxEstilizado>
            </ContainerEstilizado>
        </div>
    );
}

export default Home;
