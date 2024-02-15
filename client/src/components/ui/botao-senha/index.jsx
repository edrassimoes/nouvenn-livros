import styled from "styled-components";
import {useState} from "react";

const InputEstilizado = styled.div`
    position: relative;

    label {
        display: block;
        margin-top: 3px;
        font-family: "Comic Sans MS", sans-serif;
    }

    input {
        border: 2px solid black;
        border-radius: 3px;
        box-sizing: border-box;
        width: 100%;
        height: 115%;
        font-family: "Comic Sans MS", sans-serif;

        &:focus-within {
            outline: 2px solid darkblue;
            margin-top: 3px;
        }

    }

    img {
        cursor: pointer;
        position: absolute;
        top: 40%;
        right: 3%;
		width: 30px;
    }

`;

const BotaoSenha = (props) => {

	const [show, setShow] = useState(false);

	const handleShow = () => {
		setShow(!show)
	}

	const aoDigitar = (evento) => {
		props.aoAlterar(evento.target.value)
	}
	
	return (
		<InputEstilizado>
			<label>
				Senha:
				<input
					type={show ? "text" : "password"}
					value={props.valor}
					onChange={aoDigitar}
					required
				/>
				<img
					src={show ? "src/assets/eye-close.svg" : "src/assets/eye-open.svg"}
					alt={show ? "Esconder senha" : "Mostrar senha"}
					onClick={handleShow}
				/>
			</label>
		</InputEstilizado>
	);
};

export default BotaoSenha;