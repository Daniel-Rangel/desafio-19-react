import { Botao } from "../Botoes";
import { Content } from "./style";
const valorProps = {
    nome: 'Assinar',
    href: '#'
} 

export function CartaPlanos (){
    return(
        <Content>
            <h2>Bronze</h2>
            <span>28</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            <div>
                <Botao valor={valorProps}/>
            </div>
        </Content>
    )
}

/* outline: none; */