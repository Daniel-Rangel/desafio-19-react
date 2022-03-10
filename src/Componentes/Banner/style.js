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
`  