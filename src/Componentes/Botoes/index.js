import { Link } from "./style"



export function Botao (props){
    return(
        <Link href={props.valor.href} >{props.valor.nome}</Link>
    )
}

export function btnBotao (props){
    return(
        <Link href={props.valor.href} >{props.valor.nome}</Link>
    )
}