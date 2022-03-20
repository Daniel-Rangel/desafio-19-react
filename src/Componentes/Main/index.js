import { DownloadApp } from "../DownloadApp"
import { Banner } from "../Banner"
import { FromMensagem } from "../Form"
import { About } from "../About"
import { Plans } from "../Plans"
import { Footer } from "../Footer"


export function Main (){
    return(
        <>
            <Banner />
            <About />
            <DownloadApp />
            <Plans />
            <FromMensagem />
            <Footer/>
        </>
    )
}