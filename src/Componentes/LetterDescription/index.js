import { LetterDescriptionDiv } from "./stely"

export function LetterDescription (props){
    return(
        <LetterDescriptionDiv>
            <img src={props.cartas.img} alt="" />
            <h3>{props.cartas.titulo}</h3>
            <p>{props.cartas.texto}</p>
        </LetterDescriptionDiv>
    )
}
