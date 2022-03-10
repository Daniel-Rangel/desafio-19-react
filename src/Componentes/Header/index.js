import { Container , Logo, Nav } from "./style"

export function Header (){
    return(
        <Container>
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
        </Container>
    )
}