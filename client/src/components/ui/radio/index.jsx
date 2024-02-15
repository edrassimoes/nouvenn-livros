import styled from "styled-components";

const HiddenRadioInput = styled.input.attrs({ type: 'radio' })`
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    pointer-events: none;
`;

const RadioEstilizado = styled.div`
    label {
        font-size: 25px;
        cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👆🏻</text></svg>"), pointer;;
    }
`

const Radio = (props) => {

    const aoClicar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <RadioEstilizado>
            <HiddenRadioInput  type="radio" id={props.id} title={props.id} name="color_icon" value={props.valor} onChange={aoClicar} required/>
            <label htmlFor={props.id}>
                {props.valor}
            </label>
        </RadioEstilizado>
    );
};

export default Radio;