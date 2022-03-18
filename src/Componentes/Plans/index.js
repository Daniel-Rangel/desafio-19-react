import { CardPlan } from "../CardPlan" 
import { ContainerLg } from "../Container/styled"
import { PlansSection } from "./style"



export function Plans (){
    return(
        <ContainerLg>
            <PlansSection>
                <h2>Nossos Planos</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi quis euismod ultrices.</p>
                <div>
                    <CardPlan />
                    <CardPlan />
                    <CardPlan />
                </div>
            </PlansSection>
        </ContainerLg>
    )
}