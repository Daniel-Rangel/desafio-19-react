import styled from 'styled-components'

export const CardPlanArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 32%;
    height: 471px;
    background-color: ${props => ( props.theme.recommended ? '#293145' : '#EFF8FF')};
    margin: 10px 0;
    border-radius: 8px;
    padding: 2.1875rem;
    font-size: 0.9rem;
    

    h2.cardH2{
        font-size: 1.8rem;
        font-weight: 600;
        color: ${props => ( props.theme.recommended ? '#fff' : '#293145')};
        ${props =>  console.log(props.theme.recommended )}
        position: relative;
    }

    h2::after{
        display: ${props => ( props.theme.recommended ? 'block' : 'none')};
        content: 'PREFERIDO';
        position: absolute;
        font-size: 0.7rem;
        font-weight: 300;
        background-color: var(--cor-azulClaro);
        width: 122px;
        border-radius: 50px;
        padding: 4px ;
        left: 50%;
        top: 42px;
        transform: translate(-50%, 0);
    }
    
    span{
        display: block;
        font-size: 3.125rem;
        font-weight: 700;
        color: ${props => ( props.theme.recommended ? '#fff' : '#293145')} ;
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

    p{
        color: ${props => ( props.theme.recommended ? '#fff' : '#293145')} ;
    }

    div.marg{
        display:flex;
        justify-content: center;
    }

    @media(max-width: 768px ){
        width: 50%;

        div.marg{
            align-content: center;
        }
    }

    @media(max-width: 425px ){
        width: 90%;

        div.marg{
            align-content: center;
        }
    }
    
`
