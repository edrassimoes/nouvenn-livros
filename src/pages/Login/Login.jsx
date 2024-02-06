import EstilosGlobais from "../../components/EstilosGlobais/index.jsx";
import styled from "styled-components";
import Input from "../../components/Input/index.jsx";
import {useState} from "react";

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;

    h1 {
        font-family: "Comic Sans MS", sans-serif;
    }

`;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
	border-top: 2px dashed black;
	padding-top: 50px;
`;

const SingupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightgoldenrodyellow;
    border: 2px solid black;
    border-radius: 5px;
    box-sizing: border-box;
    font-family: "Comic Sans MS", sans-serif;
    padding: 20px;

    h2 {
        background-color: white;
        border: 5px solid white;
        border-radius: 5px;
    }

    p {
        font-size: 80px;
        margin: 0 0 20px 0;
    }

    section {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
    }

    &:hover {
        transform: scale(1.09);
    }

`;

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: lightskyblue;
    border: 2px solid black;
    border-radius: 5px;
    font-family: "Comic Sans MS", sans-serif;
    padding: 20px;

    h2 {
        background-color: white;
        border: 5px solid white;
        border-radius: 5px;
    }

    p {
        font-size: 80px;
        margin: 0 0 20px 0;
    }

    section {
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
    }

    &:hover {
        transform: scale(1.09);
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

	const [nomeCriar, setNomeCriar] = useState("");
	const [senhaCriar, setSenhaCriar] = useState("");
	const [nomeEntrar, setNomeEntrar] = useState("");
	const [senhaEntrar, setSenhaEntrar] = useState("");


	return (
		<div>
			<EstilosGlobais/>
			<PageContainer>
				<h1>📚 Emprestimo de Livros</h1>
				<MainContainer>
					<SingupContainer>
						<h2>✨ CRIAR UMA CONTA ✨</h2>
						<p>👤</p>
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
								<BotaoCriar type="submit" value="Cadastrar-se"/>
							</section>
						</form>
					</SingupContainer>
					<LoginContainer>
						<h2>◼◾◼◾◼ ENTRAR ◼◾◼◾◼</h2>
						<p>📖</p>
						<form>
							<Input
								label="Nome de usuário:"
								valor={nomeEntrar}
								aoAlterar={nome => setNomeEntrar(nome)}
							/>
							<Input
								label="Senha:"
								valor={senhaEntrar}
								aoAlterar={senha => setSenhaEntrar(senha)}
							/>
							<section>
								<BotaoEntrar type="submit" value="Entrar"/>
							</section>
						</form>
					</LoginContainer>
				</MainContainer>
			</PageContainer>
		</div>
	);
};

export default Login;