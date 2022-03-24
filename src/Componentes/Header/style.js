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

    @media (max-width: 768px) {
        display: ${props => props.show? '' : 'none'};
        position: absolute;
        top: 0;
        left: 0vw;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
        background-color: var(--fundo1);

        ul{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            
        }

    }
`

export const MenuHamburguerSpan = styled.span`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        width: 40px;
        height: 40px;
        cursor: pointer;
        justify-content: center;
        align-items: center;
        position: relative;
        transition: all 0.5s ease-out;

        &::before{
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: #293145;
            transform: translateY(-10px);
            box-shadow: 0 10px 0 #293145;
        }

        &::after{
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;
            background-color: #293145;
            transform: translateY(10px);
        }

        &::before${ props => props.show ? '' : 'active'}{
            transform: translateY(0px) rotate(45deg);
            box-shadow: 0 0 0 #293145;
        }

        &::after${ props => props.show ? '' : 'active' }{
            transform: translateY(0px) rotate(-45deg);
        }

    }   

`