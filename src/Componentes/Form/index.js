import { Emailsection } from './style'
import { LinkSubmit } from "../Buttons/style"
import { ContainerLgFlxcolumn } from "../Container/styled"

export function FromMensagem (){
    return(
        <Emailsection>
            <ContainerLgFlxcolumn>
                <div>
                    <h1>Contato</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                </div>
                <form action="#">
                    <input type="email" name="email" placeholder='Seu Melhor email'/>
                    <LinkSubmit type="submit" value='Enviar'/>
                </form>
            </ContainerLgFlxcolumn>
        </Emailsection>
    )
}