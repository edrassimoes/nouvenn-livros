import Input from "../../components/Input/index.jsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {toast, Toaster} from "sonner";
import {SyncLoader} from "react-spinners";

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

    // Armazena o status da conexão com o banco para posteriormente carregar os componentes.
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    // Acessa a tabela "users" do banco de dados.
    const getUsuarios = async () => {
        try {
            const response = await axios.get('http://localhost:1234/api/v1/usuarios');
            const userTable = response.data;
            setUsuarios(userTable)
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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

    // Valida se o usuário existe no banco e depois salva a sessão atual no Local Storage.
    const validaUsuario = () => {
        let validacao = usuarios.find(conta => conta.username === nome);
        if (validacao) {
            toast.error('Nome de usuário já existente no sistema, tente outro.');
        } else if (email && senha) {
            addUsuario();
            toast.success('Usuário cadastrado com sucesso! 🥳');
            setLoading(true);
            setTimeout(mudaDePagina, 2000);
        } else {
            toast.error('Preencha todos os dados.');
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