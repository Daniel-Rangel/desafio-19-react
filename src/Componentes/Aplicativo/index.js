import { Container } from "./style"

import androidImg from '../../imagens/android.svg'
import appleImg from '../../imagens/apple.svg'
import imagem2Img from '../../imagens/imagem2.svg'

export function Aplicacao(){
    return(
        <Container>
            <div>
                <div>
                    <h2>Baixe nosso app para desfrutar mais!</h2>
                    <p>Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur turpis elementum amet vitae et etiam nec. Varius volutpat hac adipiscing tincidunt pretium.</p>
                    <div>
                        <a href="#"><img src={androidImg} alt="" /></a>
                        <a href="#"><img src={appleImg} alt="" /></a>
                    </div>  
                </div>
                <figure>
                    <img src={imagem2Img} alt="" />
                </figure>
            </div>
        </Container>
    )
}