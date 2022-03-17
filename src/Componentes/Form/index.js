import { Botao } from "../Botoes"
import { Container } from './style'
import { LinkSubmit } from "../Botoes/style"
import { ContainerLg } from "../Container/styled"

const valorProps = {
    nome: 'Enviar',
    href: '#'
} 

export function FromMensagem (){
    return(
        <ContainerLg>
        <Container>
            <h1>Contato</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            <form action="#">
                <input type="email" name="email"/>
                <LinkSubmit valor={valorProps}/>
            </form>
        </Container>
        </ContainerLg>
    )
}