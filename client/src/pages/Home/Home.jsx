import styled from "styled-components";
import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import EstanteGeral from "../../components/Estantes/EstanteGeral/index.jsx";
import EstanteConta from "../../components/Estantes/EstanteConta/index.jsx";
import EstanteEmprestimos from "../../components/Estantes/EstanteEmprestimos/index.jsx";
import EstanteSolicitacoes from "../../components/Estantes/EstanteSolicitacoes/index.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ContaContext} from "../../context/ContaContext.jsx";
import {useNavigate} from "react-router-dom";
import {SyncLoader} from "react-spinners";

// Estilização dos componentes React pelo Styled-Components:
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
const LoadingContainer = styled.div`
    background-color: ghostwhite;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Comic Sans MS", sans-serif;
    gap: 40px;
`;

const Home = () => {

    // Utilizado para armazenar os dados da sessão atual.
    const {setData} = useContext(ContaContext);

    // Armazena a tabela books do banco.
    const [livros, setLivros] = useState([]);

    // Armazena a tabela emprestimos do banco.
    const [emprestimos, setEmprestimos] = useState([]);

    // Armazena o status da conexão com o banco para posteriormente carregar os componentes.
    const [loading, setLoading] = useState(true);

    // Acessa a tabela "books" do banco de dados.
    const getLivros = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/livros');
            setLivros(response.data)
        } catch (error) {
            console.log(error.response)
        } finally {
            setLoading(false);
        }
    };

    // Acessa a tabela "emprestimos" do banco de dados.
    const getEmprestimos = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/emprestimos');
            setEmprestimos(response.data)
        } catch (error) {
            console.log(error.response)
        }
    };

    // Recuperar os dados da sessão atual presentes no Local Storage e os armazena.
    const getCurrentSession = () => {
        const storedData = JSON.parse(localStorage.getItem('sessaoAtual'));
        setData(storedData);
    }

    // Quando o componente carregar, já inicia a requisição das tabelas ao banco
    // e dos dados da sessão ao Local Storage.
    useEffect(() => {
        getLivros();
        getEmprestimos();
        getCurrentSession();
    }, []);

    // Retorna uma tela momentanea até que a requisição ao banco seja concluída.
    if (loading) {
        return (
            <div>
                <EstilosGlobais/>
                <LoadingContainer>
                    <SyncLoader
                        color="black"
                    />
                    <p>📊 Obtendo os dados necessários, por favor aguarde.</p>
                </LoadingContainer>
            </div>
        )
    }

    // Retorna a página Home.
    return (
        <div>
            <EstilosGlobais/>
            <ContainerEstilizado>
                <BoxEstilizado>
                    <Header
                        valor={loading}
                        aoAlterar={(value) => setLoading(value)}
                    />
                    <Banner/>
                    <EstanteGeral
                        livros={livros}
                        emprestimos={emprestimos}
                    />
                </BoxEstilizado>
                <BoxEstilizado>
                    <EstanteConta
                        livros={livros}
                        emprestimos={emprestimos}
                    />
                    <EstanteEmprestimos
                        emprestimos={emprestimos}
                    />
                    <EstanteSolicitacoes
                        emprestimos={emprestimos}
                    />
                </BoxEstilizado>
            </ContainerEstilizado>
        </div>
    );
}

export default Home;
