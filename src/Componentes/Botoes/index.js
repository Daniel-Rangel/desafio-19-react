import { Container } from "./style"



export function Botao (props){
    return(
        <Container href={props.valor.href} >{props.valor.nome}</Container>
    )
}