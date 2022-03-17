import pessoaImg from '../../imagens/pessoa.svg'
import escudoImg from '../../imagens/escudo_seguranca.svg'
import rostoImg from '../../imagens/rosto_feliz.svg'

import { Carta } from '../Cartas'

import { Container } from './style'
import { ContainerLg } from '../Container/styled'

export function Funcao (){
    const cartas = [
        {
            img: pessoaImg ,
            titulo : 'Crie conexões',
            texto: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            img: escudoImg ,
            titulo : 'Crie conexões',
            texto: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            img: rostoImg ,
            titulo : 'Crie conexões',
            texto: 'Lorem ipsum dolor sit amet consectetur'
        }
    ]
    
    return(
        <Container>
            <h2>Como funciona</h2>
            <ContainerLg>
                {cartas.map( carta => (
                    <Carta cartas={carta} />
                ))}
            </ContainerLg>
        </Container>
    )
}