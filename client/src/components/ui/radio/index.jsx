import styled from "styled-components";

const RadioEstilizado = styled.div`
    input:hover {
        
    }
`

const Radio = (props) => {

    const aoClicar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <RadioEstilizado>
            <input type="radio" id={props.id} title={props.id} name="color_icon" value={props.valor} onChange={aoClicar} required/>
            <label>
                {props.valor}
            </label>
        </RadioEstilizado>
    );
};

export default Radio;