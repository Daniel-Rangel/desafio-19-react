import styled from "styled-components";

export const ContainerSm = styled.div`
    max-width: 980px;
`

export const ContainerLg = styled.div`
    max-width: 1220px;
    display: flex;
    align-items:  center;
    margin: 0 auto;

    @media(max-width: 1024px ){
        padding: 2rem;
    }

    @media(max-width: 768px ){
        flex-direction: column;
        justify-content: center;

        &.mobileHeader{
            flex-direction: row;
        }
    }

`
export const ContainerLgFlxcolumn = styled.div`
    max-width: 1220px;
    display: flex;
    flex-direction: column;
    align-items:  center;
    margin: 0 auto;

    @media(max-width: 768px ){
        flex-direction: column;
        justify-content: center;
    }
`