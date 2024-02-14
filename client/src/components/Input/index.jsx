import styled from "styled-components";

const InputEstilizado = styled.div`
    
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
    
`

const Input = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <InputEstilizado>
            <label>
                {props.label}
                <input
                    value={props.valor}
                    onChange={aoDigitar}
                    placeholder={props.placeholder}
                    required
                />
            </label>
        </InputEstilizado>
    );
};

export default Input;