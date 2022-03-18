import { Link } from "./style"



export function BtnLink (props){
    return(
        <Link href={props.valor.href} >{props.valor.nome}</Link>
    )
}

export function BtnSubmit (props){
    return(
        <Link href={props.valor.href} >{props.valor.nome}</Link>
    )
}