import styled from 'styled-components'

export const Container = styled.section`
    background-color: var(--fundo1);

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        div{
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            h2{
                font-size: 2rem;
                color: var(--cor-azulEscuro);
            }

            p{
                font-size: 16px;
                color: var(--cor-texto);
                font-weight: 300;
                max-width: 456px;
                margin: 1.5rem 0;
                letter-spacing: 0.1px;
                line-height: 26px;
            }
            
            div{
                display: flex;
                flex-direction: row;
                gap: 24px;
            }
        }
        

        figure{
            margin: 38px 0;
        }
    }
`