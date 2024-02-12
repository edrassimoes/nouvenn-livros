import Input from "../../components/Input/index.jsx";
import styled from "styled-components";
import {useState} from "react";
import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast, Toaster} from "sonner";


const PageContainer = styled.div`
    background-color: ghostwhite;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;

const SingupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightgoldenrodyellow;
    border: 2px solid black;
    border-radius: 5px;
    font-family: "Comic Sans MS", sans-serif;
    padding: 20px;

    h1 {
        font-family: "Comic Sans MS", sans-serif;
        background-color: white;
        border: 20px solid white;
        border-radius: 10px;
    }

    h2 {
        block-size: fit-content;
        font-size: 100px;
        margin: 20px;
    }

    h3 {
        margin: 0;
        color: darkblue;
    }

    section {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;

        p {
            font-size: 18px;
        }

        a {
            cursor: pointer;
            color: darkblue;

            &:hover {
                font-weight: bold;
            }

        }

    }

`;

const BotaoCriar = styled.input`
    cursor: pointer;
    font-size: larger;
    border: 2px solid black;
    border-radius: 5px;
    width: 50%;
    height: 50px;
    margin: 20px 0;

    &:hover {
        background-color: darkgreen;
        color: white;
        font-weight: bold;
    }

`;

const Signup = () => {

    const [nomeCriar, setNomeCriar] = useState('');
    const [senhaCriar, setSenhaCriar] = useState('');
    const [emailCriar, setEmailCriar] = useState('');

    const navigate = useNavigate();

    const addUsuario = () => {
        axios.post('http://localhost:3000/api/usuarios', {
            username: nomeCriar ? nomeCriar : null,
            email: emailCriar ? emailCriar : null,
            password: senhaCriar ? senhaCriar : null,
        })
            .then(response => console.log(response))
    }

    const onSubmitCriar = (evento) => {
        evento.preventDefault();
        addUsuario();
    }

    return (
        <div>
            <EstilosGlobais/>
            <PageContainer>
                <Toaster richColors position="bottom-right" />
                <SingupContainer>
                    <h1>✨ Criar uma conta ✨</h1>
                    <h3>Ficamos felizes em recebelo(a) em nossa comunidade!</h3>
                    <h3>Preencha as informações abaixo para continuar.</h3>
                    <h2>👤</h2>
                    <form>
                        <Input
                            label="Nome de usuário:"
                            valor={nomeCriar}
                            aoAlterar={nome => setNomeCriar(nome)}
                        />
                        <Input
                            label="E-mail:"
                            valor={emailCriar}
                            aoAlterar={email => setEmailCriar(email)}
                        />
                        <Input
                            label="Senha:"
                            valor={senhaCriar}
                            aoAlterar={senha => setSenhaCriar(senha)}
                        />
                        <section>
                            <BotaoCriar type="submit" value="Cadastrar-se" onClick={onSubmitCriar}/>
                            <p>Já possue uma conta? <a onClick={()=> {navigate('/')}}>Fazer login</a></p>
                        </section>
                    </form>
                </SingupContainer>
            </PageContainer>
        </div>
    );
};

export default Signup;