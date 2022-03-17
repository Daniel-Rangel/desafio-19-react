import styled from 'styled-components'

export const SectionApps = styled.section`
    background-color: var(--fundo1);

    & div{

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        div{
            
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
                    justify-content: flex-start;
                    gap: 18px;
                    
                }
            }
        }

        figure{
            margin: 38px 0;
        }
    }
`