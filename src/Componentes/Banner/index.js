import Imagem1 from '../../imagens/imagem1.svg'
import { Botao } from '../Botoes'

import { Container } from "./style"

const valorProps = {
    nome: 'Cadastre-se',
    href: '#'
} 

export function Banner (){
    return(
        <Container>
            <div>
                <div>
                    <h1>Rachi, <br/> é tudo que você precisa em um só lugar.</h1>
                    <Botao valor={valorProps}/>
                </div>
                <figure>
                    <img src={Imagem1} alt="Banner"/>
                </figure>
            </div>  
        </Container>
    )
}