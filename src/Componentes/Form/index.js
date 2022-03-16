import { Botao } from "../Botoes"
import { Container } from './style'
import { LinkSubmit } from "../Botoes/style"

const valorProps = {
    nome: 'Enviar',
    href: '#'
} 

export function FromMensagem (){
    return(
        <Container>
            <h1>Contato</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            <form action="#">
                <input type="email" name="email"/>
                <LinkSubmit valor={valorProps}/>
            </form>
        </Container>
    )
}