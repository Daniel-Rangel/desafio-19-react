import styled from 'styled-components'

export const DownloadAppSection = styled.section`
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
                    flex-wrap: wrap;
                    justify-content: flex-start;
                    gap: 18px;

                    @media(max-width: 768px ){
                        justify-content: center;
                    }
                    
                }

                @media(max-width: 768px ){
                    align-items: center;

                    h2{
                        text-align: center;
                    }

                    p{
                        text-align: center;
                    }
                }
            }

        }

        figure{
            margin: 38px 0;
            img{
                width: 100%;
            }
        }

        @media(max-width: 768px ){
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }

    
`