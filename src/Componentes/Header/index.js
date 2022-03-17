import { HeaderStyle , Logo, Nav } from "./style"
import { ContainerLg } from '../Container/styled'

export function Header (){
    return(
        <HeaderStyle>
            <ContainerLg>
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
            </ContainerLg>
        </HeaderStyle>
    )
}