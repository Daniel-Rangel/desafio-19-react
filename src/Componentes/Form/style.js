import styled from "styled-components";
import Img3 from "../../imagens/imagem3.png"

export const Emailsection = styled.section`
    background-image: linear-gradient(#2a3246b3, #2a3246b3 ), url(${Img3});
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 382px;
    display: flex;
    align-items: center;
    color: #fff;
    text-align: center;

    p{
        margin: 1rem auto 5rem;
        width: 55%;
        font-weight: 100;
    }

    form{
        display: flex;
        gap: 1rem;

        input[type="email"]{
            max-width: 300px;
            background-color: rgba(255, 255, 255, 0);
            color: #fff;
            border-bottom: 1px solid #0f9afe;
            padding: 6px 6px;
            font-size: 1.125rem;

            &::placeholder{
                color: #fff;
                font-weight: 100;
                font-size: 1.125rem;
                
            }
        }

        @media (max-width: 425px) {
            flex-direction: column;
            
            align-items: center;
        }
    }
`
