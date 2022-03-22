import styled from "styled-components";

export const Container = styled.section`
    background-color: var(--fundo1);

    div{
        display: flex;
        align-items: center;
        justify-content:space-between;

        div{
            width: 50%;

            &:nth-child(1){
                display: flex;
                flex-direction: column;
                align-items: initial;

                h1{
                    line-height: 52px;
                    color: var(--cor-azulEscuro);
                    font-size: 2.8rem;
                    margin-bottom: 3.125rem;
                }
            }
        }
    }

    @media(max-width: 430px ){
        div{
            div{
                &:nth-child(1){
                    h1{
                        line-height: 40px;
                        font-size: 1.8rem;
                    }
                }
            } 
        }
        

        figure{
            img{
                width: 100%;
            }
        }
    }

`  