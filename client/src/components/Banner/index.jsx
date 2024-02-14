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
        width: 400px;
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
    margin-bottom: 10px;
    padding: 10px;

    h3 {
        font-size: 18px;
        margin: 5px 0;
    }
    
    h4 {
        text-align: right;
        margin: 0;
    }

`

const Banner = () => {

    const [quote, setQuote] = useState('')

    useEffect(() => {
        // https://github.com/lukePeavey/quotable
        const getQuote = async () => {
            const response = await axios.get('https://api.quotable.io/quotes/random?limit=1')
            setQuote(response.data[0])
        };
        getQuote();
    }, []);

    return (
        <ContainerImagem>
            <img src="/assets/logo.png" alt=""/>
            <Quotes>
                <h3>"{quote.content}"</h3>
                <h4><b>- {quote.author}</b></h4>
            </Quotes>
        </ContainerImagem>
    );
};

export default Banner;