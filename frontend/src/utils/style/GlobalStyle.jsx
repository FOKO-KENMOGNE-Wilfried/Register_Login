import { createGlobalStyle } from "styled-components";

const StyledGlobalStyled = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #5B86E5;
    }
    *{
        font-family: poppins;
    }
`

function GlobalStyle(){
    return(
        <StyledGlobalStyled />
    )
}

export default GlobalStyle;