import styled from "styled-components";
import axios from "axios";
import {useEffect, useState} from "react";

const ContainerImagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        margin: 10px 0;
        width: 150px;
    }

    p {
        font-family: "Comic Sans MS", sans-serif;
        margin-bottom: 0;
    }

`

const Quotes = styled.section`
    display: flex;
    flex-direction: column;
    font-family: "Comic Sans MS", sans-serif;
    font-style: italic;
    margin: 10px 0;

    h3 {
        font-size: 18px;
        margin: 5px 0;
    }
    
    h4 {
        text-align: end;
        margin: 0;
    }

`

const Banner = () => {

    const [quote, setQuote] = useState('')

    useEffect(() => {
        getQuote();
    }, []);

    // https://github.com/lukePeavey/quotable
    const getQuote = async () => {
        const response = await axios.get('https://api.quotable.io/quotes/random?limit=1')
        setQuote(response.data[0])
    }

    return (
        <ContainerImagem>
            <Quotes>
                <h3>"{quote.content}"</h3>
                <h4><b>- {quote.author}</b></h4>
            </Quotes>
            <img src="/assets/bookshelf.png" alt=""/>
            <p>Seja bem-vindo(a) a nossa estante coletiva 😄</p> :
        </ContainerImagem>
    );
};

export default Banner;