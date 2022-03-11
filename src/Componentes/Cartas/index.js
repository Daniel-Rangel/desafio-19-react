import { CartaEstilo } from "./stely"

export function Carta (props){
    return(
        <CartaEstilo>
            <img src={props.cartas.img} alt="" />
            <h3>{props.cartas.titulo}</h3>
            <p>{props.cartas.texto}</p>
        </CartaEstilo>
    )
}