import pessoaImg from '../../imagens/pessoa.svg'
import escudoImg from '../../imagens/escudo_seguranca.svg'
import rostoImg from '../../imagens/rosto_feliz.svg'

import { Carta } from '../Cartas'

import { Container } from './style'

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
            <div>
                {cartas.map( carta => (
                    <Carta cartas={carta} />
                ))}
            </div>
        </Container>
    )
}