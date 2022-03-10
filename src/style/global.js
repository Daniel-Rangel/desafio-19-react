import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root{
    --cor-azulEscuro: #293145;
    --cor-azulClaro: #0F9AFE;
    --cor-texto: #6E7275;
    --fundo1: #EFF8FF;
    --container: 1096px;
    --fontemedio: 0.88rem;
    --fonteGrande: 1.5rem;
}

*{
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Sora', sans-serif;
    width: 100%;
    max-width: var(--container);
    margin: 0 auto;
}



`