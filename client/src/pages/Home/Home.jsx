import styled from "styled-components";
import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import EstanteGeral from "../../components/Estantes/EstanteGeral/index.jsx";
import EstanteConta from "../../components/Estantes/EstanteConta/index.jsx";
import EstanteEmprestimos from "../../components/Estantes/EstanteEmprestimos/index.jsx";
import EstanteSolicitacoes from "../../components/Estantes/EstanteSolicitacoes/index.jsx";
import {Toaster} from "sonner";

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
    return (
        <div>
            <EstilosGlobais/>
            <Toaster richColors position="bottom-right" />
            <ContainerEstilizado>
                <BoxEstilizado>
                    <Header/>
                    <Banner/>
                    <EstanteGeral/>
                </BoxEstilizado>
                <BoxEstilizado>
                    <EstanteConta/>
                    <EstanteEmprestimos/>
                    <EstanteSolicitacoes/>
                </BoxEstilizado>
            </ContainerEstilizado>
        </div>
    );
}

export default Home;
