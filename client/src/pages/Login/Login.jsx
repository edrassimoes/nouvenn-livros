import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import styled from "styled-components";
import Input from "../../components/Input/index.jsx";
import {useContext, useState} from "react";
import BotaoSenha from "../../components/BotaoSenha/index.jsx";
import {ContaContext} from "../../context/ContaContext.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from 'sonner'

const PageContainer = styled.div`
    background-color: ghostwhite;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

	const {nomeEntrar, setNomeEntrar, senhaEntrar, setSenhaEntrar} = useContext(ContaContext)

	const navigate = useNavigate();

	const onSubmitEntrar = (evento) => {
		evento.preventDefault();
		getUsuarioPorUsername();
	};

	const getUsuarioPorUsername = async () => {

		try {
			const urlString = `http://localhost:1234/api/usuarios/login/${nomeEntrar}`
			const response = await axios.get(urlString);
		} catch (error) {
			console.error(error);
		}

	}

	return (
		<div>
			<EstilosGlobais/>
			<PageContainer>
				<Toaster richColors position={"bottom-center"}/>
				<LoginContainer>
					<h1>📚 Emprestimo de Livros</h1>
					<h3>Seja bem-vindo(a) a nossa comunidade literária!</h3>
					<h3 id="teste">Faça seu login para continuar.</h3>
					<h2>👤</h2>
					<form>
						<Input
							label="Nome de usuário:"
							valor={nomeEntrar}
							aoAlterar={nome => setNomeEntrar(nome)}
						/>
						<BotaoSenha
							valor={senhaEntrar}
							aoAlterar={senha => setSenhaEntrar(senha)}
						/>
						<section>
							<BotaoEntrar type="submit" value="Entrar" onClick={onSubmitEntrar}/>
							<p>Não possue uma conta? <a onClick={()=> {navigate('/signup')}}>Cadastre-se</a></p>
						</section>
					</form>
				</LoginContainer>
			</PageContainer>
		</div>
	);
};

export default Login;