import { BtnLink } from "../Botoes";
import { ArticlePlanos } from "./style";

const valorProps = {
    nome: 'Assinar',
    href: '#'
} 

export function CartaPlanos (){
    return(
        <ArticlePlanos>
            <h2>Bronze</h2>
            <span>28</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            <div>
                <BtnLink valor={valorProps}/>
            </div>
        </ArticlePlanos>
    )
}

/* outline: none; */