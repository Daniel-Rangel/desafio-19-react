import { DownloadApp } from "../DownloadApp"
import { Banner } from "../Banner"
import { FromMensagem } from "../Form"
import { About } from "../About"
import { Plans } from "../Plans"

export function Main (){
    return(
        <>
            <Banner />
            <About />
            <DownloadApp />
            <Plans />
            <FromMensagem />
        </>
    )
}