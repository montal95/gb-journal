import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }


    .App {
        background-color: #282c34;
        min-height: 100vh;
    }

    header {
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }

    main {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-template-rows: 1fr;
        grid-column-gap: 16px;
        grid-row-gap: 0px;
        max-width: 960px;
        margin: 0 auto;
    }

    .pages {
        background-color: blanchedalmond;
        min-width: 355px;
        margin: 0 10px 10px;
    }

    section {
        margin: 16px;
    }

    #reset {
        background: none;
        border: none;
        padding: 0;
        /*optional*/
        font-family: arial, sans-serif;
        /*input has OS specific font-family*/
        color: #069;
        text-decoration: underline;
        cursor: pointer;
    }

`

export default GlobalStyle;