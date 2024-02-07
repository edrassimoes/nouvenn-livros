import Input from "../../components/Input/index.jsx";
import styled from "styled-components";
import {useContext, useState} from "react";
import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import BotaoSenha from "../../components/BotaoSenha/index.jsx";
import ContaProvider, {ContaContext} from "../../context/ContaContext.jsx";

const PageContainer = styled.div`
    background-color: ghostwhite;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
        font-family: "Comic Sans MS", sans-serif;
        background-color: white;
        border: 20px solid white;
        border-radius: 10px;
    }

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

    h2 {
        block-size: fit-content;
        font-size: 100px;
        margin: 10px;
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

	const {nomeCriar, setNomeCriar, senhaCriar, setSenhaCriar} = useContext(ContaContext)

	const onSubmitCriar = (evento) => {
		evento.preventDefault()
		console.log({
			nomeCriar,
			senhaCriar
		})
	}

	return (
		<ContaProvider>
			<EstilosGlobais/>
			<PageContainer>
				<SingupContainer>
					<h1>✨ Criar uma conta ✨</h1>
					<h2>👤</h2>
					<form>
						<Input
							label="Nome de usuário:"
							valor={nomeCriar}
							aoAlterar={nome => setNomeCriar(nome)}
						/>
						<Input
							label="Senha:"
							valor={senhaCriar}
							aoAlterar={senha => setSenhaCriar(senha)}
						/>
						<section>
							<BotaoCriar type="submit" value="Cadastrar-se" onClick={onSubmitCriar}/>
							<p>Já possue uma conta? <a>Fazer login</a></p>
						</section>
					</form>
				</SingupContainer>
			</PageContainer>
		</ContaProvider>
	);
};

export default Signup;