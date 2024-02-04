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
        font-family: "Comic Sans MS", sans-serif;
    }
    
`

const Input = (props) => {

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <InputEstilizado>
            <label>{props.label}</label>
            <input  value={props.valor} onChange={aoDigitar} required/>
        </InputEstilizado>
    );
};

export default Input;