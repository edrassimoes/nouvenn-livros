import styled from "styled-components";
import EstilosGlobais from "../../components/ui/estilos-globais/index.jsx";
import Header from "../../components/ui/header/index.jsx";
import Banner from "../../components/ui/banner/index.jsx";
import EstanteGeral from "../../components/estantes/estante-geral/index.jsx";
import EstanteConta from "../../components/estantes/estante-do-usuário/index.jsx";
import EstanteEmprestimos from "../../components/estantes/estante-dos-emprestimos/index.jsx";
import EstanteSolicitacoes from "../../components/estantes/estante-das-solicitacoes/index.jsx";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {ContaContext} from "../../context/conta-context.jsx";

// Estilização dos componentes React pelo Styled-Components:
const ContainerEstilizado = styled.div`
    cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🤚🏻</text></svg>"), auto;
    width: 100%;
    background-color: ghostwhite;
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    margin-top: 5px;
    
    button {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👆🏻</text></svg>"), auto;
    }
    
    input {
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>✍🏻</text></svg>"), auto;
    }
    
`;
const BoxEstilizado = styled.div`
    position: relative;
    width: 96%;
    background-color: lightsteelblue;
    border: black 1px solid;
    border-radius: 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 8px 10px;
    box-sizing: border-box;
    
`;

const Home = () => {

    // Utilizado para armazenar os dados da sessão atual.
    const {setData} = useContext(ContaContext);

    // Armazena a tabela books do banco.
    const [livros, setLivros] = useState([]);

    // Armazena a tabela emprestimos do banco.
    const [emprestimos, setEmprestimos] = useState([]);

    // Acessa a tabela "books" do banco de dados.
    const getLivros = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/livros');
            setLivros(response.data)
        } catch (error) {
            console.log(error.response)
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

    // Retorna a página Home.
    return (
        <div>
            <EstilosGlobais/>
            <ContainerEstilizado>
                <BoxEstilizado>
                    <Header/>
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
