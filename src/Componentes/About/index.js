import pessoaImg from '../../imagens/pessoa.svg'
import escudoImg from '../../imagens/escudo_seguranca.svg'
import rostoImg from '../../imagens/rosto_feliz.svg'

import { LetterDescription } from '../LetterDescription'

import { AboutSection    } from './style'
import { ContainerLg } from '../Container/styled'

export function About (){
    const cartas = [
        {
            id:1,
            img: pessoaImg ,
            titulo : 'Crie conexões',
            texto: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            id:2,
            img: escudoImg ,
            titulo : 'Crie conexões',
            texto: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            id:3,
            img: rostoImg ,
            titulo : 'Crie conexões',
            texto: 'Lorem ipsum dolor sit amet consectetur'
        }
    ]
    
    return(
        <AboutSection>
            <h2>Como funciona</h2>
            <ContainerLg>
                {cartas.map( carta => (
                    <LetterDescription cartas={carta} key={carta.id}/>
                ))}
            </ContainerLg>
        </AboutSection>
    )
}