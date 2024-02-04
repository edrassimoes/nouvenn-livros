import EstilosGlobais from "./components/EstilosGlobais/index.jsx";
import Container from "./components/Container/index.jsx";
import {LivroProvider} from "./context/LivroContext.jsx";

function App() {
    return (
        <>
            <LivroProvider>
                <EstilosGlobais/>
                <Container/>
            </LivroProvider>
        </>
    )
}

export default App
