import styled from "styled-components";
import axios from "axios";
import {useEffect, useState} from "react";

const ContainerImagem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0;

    img {
        margin: 20px 0 5px 0;
        width: 60%;
    }

`

const Quotes = styled.section`
    display: flex;
    flex-direction: column;
    font-family: "Comic Sans MS", sans-serif;
    font-style: italic;
    margin: 10px;
    padding: 5px 30px 5px 15px;
    border: 2px solid black;
    border-radius: 8px;
    background: antiquewhite;
    width: 90%;
    height: fit-content;
    align-items: center;
    box-shadow: 5px 5px 0 black;
    
    #quote {
        margin-bottom: 0;
        font-weight: bold;
    }
    
    #autor {
        align-self: end;
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
            <img src="/src/assets/img-banner.png" alt=""/>
            <img src=""/>
            <Quotes>
                <p id="quote">"{quote.content}"</p>
                <p id="autor">〰 {quote.author}</p>
            </Quotes>
        </ContainerImagem>
    );
};

export default Banner;