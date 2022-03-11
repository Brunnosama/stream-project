import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html, body, #root {
    height: 100%;
}

#root {
    display: flex;
    flex-direction: column;
}

#root > main {
    flex: 1;
}

body {
    background: linear-gradient(
    180deg,
    rgba(172, 51, 99, 0.9) 0%, rgba(135, 52, 104, 0.9) 100%);
    background-attachment: fixed;
}

@media (min-width: 768px) {

    body {
        background: linear-gradient(
        90deg,
        rgba(172, 51, 99, 0.9) 0%, rgba(135, 52, 104, 0.9) 100%);
        background-attachment: fixed, scroll;
    }
}
`