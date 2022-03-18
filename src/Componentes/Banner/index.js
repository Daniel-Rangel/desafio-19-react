import Imagem1 from '../../imagens/imagem1.svg'
import { BtnLink } from '../Buttons'
import { ContainerLg } from '../Container/styled'

import { Container } from "./style"

const valorProps = {
    nome: 'Cadastre-se',
    href: '#'
} 

export function Banner (){
    return(
        <Container>
            <ContainerLg>
                <div>
                    <h1>Rachi, <br/> é tudo que você precisa em um só lugar.</h1>
                    <BtnLink valor={valorProps}/>
                </div>
                <figure>
                    <img src={Imagem1} alt="Banner"/>
                </figure>
            </ContainerLg>  
        </Container>
    )
}