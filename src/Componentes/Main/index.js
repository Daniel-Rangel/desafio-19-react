import { Aplicacao } from "../Aplicativo"
import { Banner } from "../Banner"
import { Funcao } from "../Funcoes"
import { Planos } from "../Planos"

export function Main (){
    return(
        <>
            <Banner />
            <Funcao />
            <Aplicacao />
            <Planos />
        </>
    )
}