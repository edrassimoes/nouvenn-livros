import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import Container from "../../components/Container/index.jsx";
import {LivroProvider} from "../../context/LivroContext.jsx";
import ContaProvider, {ContaContext} from "../../context/ContaContext.jsx";

function Home() {
    return (
        <ContaProvider>
            <LivroProvider>
                <EstilosGlobais/>
                <Container/>
            </LivroProvider>
        </ContaProvider>
    )
}

export default Home
