import styled from 'styled-components'

export const HeaderStyle = styled.header`
 /*    display: flex;
    justify-content: space-between;
    align-items: center; */
    padding: 1rem 0;
`

export const Logo = styled.div`
    position: relative;
    display: flex;
    gap: 6px;
    align-items: center;
    width: 100%;

    div{
        width: 18px;
        height: 18px;
        position: relative;

        span{
            position: absolute;
            display: block;
            width: 12px;
            height: 12px;
            background-color: var(--cor-azulEscuro);
            border-radius: 50%;

            &:nth-child(1){
                background-color: var(--cor-azulClaro);
            }

            &:nth-child(2){
                top:6px;
                left: 6px;
            }
        }
    }

    h2{
        font-weight: 600;
        font-size: var(--fonteGrande) ;
        color: var(--cor-azulEscuro);
    }
`

export const Nav = styled.nav`
        width: 100%;
    ul{
        display: flex;
        list-style: none;
        gap: 66px;
        justify-content: space-evenly;

        a{
            text-decoration: none;
            color: var(--cor-texto);
            font-weight: 500;
            transition: all 0.3s ease-in-out;

            &:hover{
                color: var(--cor-azulEscuro);
                
            }
        }
    }
`