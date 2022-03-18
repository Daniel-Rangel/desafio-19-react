import { BtnLink } from '../Buttons'
import { CardPlanArticle } from "./style";

const valorProps = {
    nome: 'Assinar',
    href: '#'
} 

export function CardPlan (){
    return(
        <CardPlanArticle>
            <h2>Bronze</h2>
            <span>28</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
            <div>
                <BtnLink valor={valorProps}/>
            </div>
        </CardPlanArticle>
    )
}

/* outline: none; */