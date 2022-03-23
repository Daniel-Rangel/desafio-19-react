import { HeaderStyle , Logo, MenuHamburguerSpan, Nav } from "./style"
import { ContainerLg } from '../Container/styled'
import { useState } from "react"

export function Header (){
    const [ show , setShow] = useState(false)

    const showMenuHamburguer = () =>{
        setShow(!show)
    }
    return(
        <HeaderStyle>
            <ContainerLg className="mobileHeader">
                <Logo>
                    <div>
                        <span></span>
                        <span></span>
                    </div>
                    <h2>Rachi</h2>
                </Logo>
                <Nav>
                    <ul>
                        <li><a href="#">Funcionalidades</a></li>
                        <li><a href="./estudoScript.html">App</a></li>
                        <li><a href="#">Planos</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </Nav>
                <MenuHamburguerSpan onClick={showMenuHamburguer} show={show}></MenuHamburguerSpan>
            </ContainerLg>
        </HeaderStyle>
    )
}