import { CartaPlanos } from "../CartaPlanos"
import { Content } from "./style"

export function Planos (){
    return(
        <Content>
            <h2>Nossos Planos</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            <div>
                <CartaPlanos />
                <CartaPlanos />
                <CartaPlanos />
            </div>
        </Content>
    )
}