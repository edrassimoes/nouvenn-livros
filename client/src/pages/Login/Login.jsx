import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import styled from "styled-components";
import Input from "../../components/Input/index.jsx";
import {useContext, useEffect, useState} from "react";
import BotaoSenha from "../../components/BotaoSenha/index.jsx";
import {ContaContext} from "../../context/ContaContext.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {Toaster, toast} from "sonner";
import {SyncLoader} from "react-spinners";

// Estilização dos componentes React pelo Styled-Components:
const PageContainer = styled.div`
    background-color: ghostwhite;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightsteelblue;
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
            color: darkgreen;

            &:hover {
                font-weight: bold;
            }

        }

    }

`;
const BotaoEntrar = styled.input`
    cursor: pointer;
    font-size: larger;
    border: 2px solid black;
    border-radius: 5px;
    width: 50%;
    height: 50px;
    margin: 20px 0;

    &:hover {
        background-color: darkblue;
        color: white;
        font-weight: bold;
    }

`;

const Login = () => {

    // Utilizado para definir a sessão atual.
    const {setData} = useContext(ContaContext);

    // Armazena a tebela "users" do banco de dados.
    const [usuarios, setUsuarios] = useState([])

    // Coleta as informações dos inputs.
    const [usuario, setUsuario] = useState({
        username: "",
        password: ""
    })

    // Armazena o status da conexão com o banco para posteriormente carregar os componentes.
    const [loading, setLoading] = useState(true);

    // Utilizado para alterar a rota da pagina após o login.
    const navigate = useNavigate();

    // Acessa a tabela "users" do banco de dados.
    const getUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/usuarios/');
            const userTable = response.data;
            setUsuarios(userTable)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    // Valida se o usuário existe no banco e depois salva a sessão atual no Local Storage.
    const validaUsuario = async () => {
        const validacao = usuarios.find(conta => (conta.username === usuario.username && conta.password === usuario.password));
        if (validacao) {
            localStorage.setItem('sessaoAtual', JSON.stringify(validacao));
            navigate('/home');
        } else {
            toast.error('Usuário ou senha incorretos.');
            setUsuario({
                username: "",
                email: "",
                password: "",
                logged: false
            });
        }
    }

    // Captura os valores dos inputs e armazena na variável usuário.
    const handleChange = (field, value) => {
        setUsuario(prevUser => ({
            ...prevUser,
            [field]: value
        }));
    }

    // Inicia o processo de verificação dos dados do usuário.
    const handleSubmit = (evento) => {
        evento.preventDefault();
        validaUsuario();
    };

    // Quando o componente carregar, já inicia a requisição da tabelas usuários ao banco.
    useEffect(() => {
        getUsuarios();
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

    // Retorna a página de LogIn.
    return (
        <div>
            <EstilosGlobais/>
            <Toaster richColors position="top-center"/>
            <PageContainer>
                <LoginContainer>
                    <h1>📚 Emprestimo de Livros</h1>
                    <h3>Seja bem-vindo(a) a nossa comunidade literária!</h3>
                    <h3 id="teste">Faça seu login para continuar.</h3>
                    <h2>👤</h2>
                    <form>
                        <Input
                            label="Nome de usuário:"
                            valor={usuario.username}
                            aoAlterar={(username) => handleChange('username', username)}
                        />
                        <BotaoSenha
                            valor={usuario.password}
                            aoAlterar={(password) => handleChange('password', password)}
                        />
                        <section>
                            <BotaoEntrar type="submit" value="Entrar" onClick={handleSubmit}/>
                            <p>Não possue uma conta? <a onClick={() => {
                                navigate('/signup')
                            }}>Cadastre-se</a></p>
                        </section>
                    </form>
                </LoginContainer>
            </PageContainer>
        </div>
    );
};

export default Login;