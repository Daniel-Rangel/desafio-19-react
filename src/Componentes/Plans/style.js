import styled from 'styled-components'

export const PlansSection = styled.section`
    padding: 3.125rem 0;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 300;
    color: var(--cor-texto);
    
    h2{
        font-size: 2.5rem;
        color: var(--cor-azulEscuro);
    }

    p{
        margin: 1rem auto;
        max-width: 586px;
        letter-spacing: 0.1px;
        line-height: 26px;
    }

    div{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`