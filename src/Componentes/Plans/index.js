import { CardPlan } from "../CardPlan" 
import { ContainerLg } from "../Container/styled"
import { PlansSection } from "./style"

const cardPlans = [
    {
        id: 1,
        classification: 'Bronze',
        value: 28,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        recommended: false,
    },
    {
        id: 2,
        classification: 'Prata',
        value: 57,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        recommended: true,
    },
    {
        id: 3,
        classification: 'Ouro',
        value: 94,
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.',
        recommended: false,
    }
]


export function Plans (){
    return(
        <ContainerLg>
            <PlansSection>
                <h2>Nossos Planos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                <div>
                    {cardPlans.map( Plan =>(
                        <CardPlan cardPlans={Plan} key={Plan.id}/>
                    ))}
                </div>
            </PlansSection>
        </ContainerLg>
    )
}