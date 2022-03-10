import Imagem1 from '../../imagens/imagem1.svg'
import { Botao } from '../Botoes'

import { Container } from "./style"


export function Banner (){
    return(
        <Container>
            <div>
                <div>
                    <h1>Rachi, <br/> é tudo que você precisa em um só lugar.</h1>
                    <Botao props={'Cadastre-se'} />
                </div>
                <figure>
                    <img src={Imagem1} alt="Banner"/>
                </figure>
            </div>  
        </Container>
    )
}