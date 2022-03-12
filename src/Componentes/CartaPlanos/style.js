import styled from 'styled-components'

export const Content = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 32%;
    height: 471px;
    background-color: var(--fundo1);
    margin: 10px 0;
    border-radius: 8px;
    padding: 2.1875rem;
    font-size: 0.9rem;

    h2{
        font-size: 1.5rem;
        font-weight: 600;
    }
    
    span{
        display: block;
        font-size: 3.125rem;
        font-weight: 700;
        color: var(--cor-azulEscuro);
        position: relative;
        width: 118px;
        margin: 0 auto;
    }

    span::before{
        content: 'R$';
        font-size: 1.25rem;
        position: absolute;
        left: -2px;
        top: 8px;
    }

    span::after{
        content: '/mês';
        font-size: 1.25rem;
        position: absolute;
        bottom: 8px;
    }
`