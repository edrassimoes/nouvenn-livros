import Input from "../../components/ui/input/index.jsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import EstilosGlobais from "../../components/ui/estilos-globais/index.jsx";
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

    // Armazena a tebela "users" do banco de dados.
    const [usuarios, setUsuarios] = useState([])

    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    // Acessa a tabela "users" do banco de dados.
    const getUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/usuarios');
            const userTable = response.data;
            setUsuarios(userTable)
        } catch (error) {
            console.error(error);
        }
    }

    const addUsuario = async () => {
        try {
            await axios.post('http://localhost:1234/api/v1/usuarios', {
                username: nome,
                email: email,
                password: senha
            });
        } catch (error) {
            console.log(error.response);
        }
    }

    // Valida se o email tem o formato correto
    const validarEmail = (email) => {
        // Expressão regular para validar o formato de um email
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    // Valida se o usuário existe no banco e depois salva a sessão atual no Local Storage.
    const validaUsuario = () => {
        if (!nome) {
            toast.error('Preencha o campo "Nome de usuário".');
        } else if (!email) {
            toast.error('Preencha o campo "Email".');
        } else if (!senha) {
            toast.error('Preencha o campo "Senha".');
        } else if (usuarios.find(conta => conta.username === nome)) {
            toast.error('Nome de usuário já existente no sistema, tente outro.');
        } else if (!validarEmail(email)) {
            toast.error('Email inválido. Por favor, insira um email válido.');
        } else {
            addUsuario();
            toast.success('Usuário cadastrado com sucesso! 🥳');
            setTimeout(mudaDePagina, 2000);
        }
    }

    const onSubmitCriar = (evento) => {
        evento.preventDefault();
        validaUsuario();
    }

    const mudaDePagina = () => {
        navigate('/');
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    return (
        <div>
            <EstilosGlobais/>
            <PageContainer>
                <Toaster richColors position="top-center"/>
                <SingupContainer>
                    <h1>✨ Criar uma conta ✨</h1>
                    <h3>Ficamos felizes em recebelo(a) em nossa comunidade!</h3>
                    <h3>Preencha as informações abaixo para continuar.</h3>
                    <h2>👤</h2>
                    <form>
                        <Input
                            label="Nome de usuário:"
                            valor={nome}
                            aoAlterar={nome => setNome(nome)}
                        />
                        <Input
                            label="E-mail:"
                            valor={email}
                            aoAlterar={email => setEmail(email)}
                        />
                        <Input
                            label="Senha:"
                            valor={senha}
                            aoAlterar={senha => setSenha(senha)}
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