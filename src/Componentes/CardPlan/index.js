import { CardPlanArticle } from "./style";
import { BtnLink } from '../Buttons'

const valorProps = {
    nome: 'Assinar',
    href: '#'
} 

export function CardPlan (props){
    return(
        <CardPlanArticle>
            <h2>{props.cardPlans.classification}</h2>
            <span>{props.cardPlans.value}</span>
            <p>{props.cardPlans.text}</p>
            <div className='marg'>
                <BtnLink valor={valorProps}/>
            </div>
            {console.log(props)}
        </CardPlanArticle>
    )
}

/* outline: none; */