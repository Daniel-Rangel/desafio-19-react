import { Botao } from "../Botoes"
import { Container} from "./styled"

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
                <Botao valor={valorProps} size="50px"/>
            </form>
        </Container>
    )
}