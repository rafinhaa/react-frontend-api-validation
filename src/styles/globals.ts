import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #ffbe85;
        --red: #f77d7a;
        --text-title: #523258;
        --text-body: #b1546d;
        --text-color: #9d6260;
        --shape: #ffffff;
        --button-color: #9d6260;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body, input, textarea, button { 
        font-family: 'Georama', sans-serif; /** Caso a primeira fonte vai usar uma fonte padrao do sistema operacional */
        font-weight: 400;
    } 
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    /** Fonte size para desktop inicia em 16px */
    html { /**  Define o tamanho da pagina */
        @media (max-width: 1080px) { /** Quando a pagina for ate 1080px de largura */
            font-size: 93.75%; /** reduz a font-size para 93.75% ou seja 15px*/
        }
        @media (max-width: 720px) { /** Quando a pagina for ate 720px de largura */
            font-size: 87.15%; /** reduz a font-size para 87.15% ou seja 14px*/
        }
        /** Definimos essas configuraçoes porque vamos usar o REM */
        /** 1 REM e igual ao font-size da nossa pagina se o font-size = 16px, 1 REM = 16px */
        /** Se o font-size esta diminuindo conforme a largura da pagina, se utilizarmos o REM na aplicaçao para definit o tamanho dos elementos (botoes), ao diminuir a largura da pagina, o tamanho dos elementos diminuirá conforme a largura da pagina */
        /** Utilizar percentual para definir o tamanho da fonte, e a melhor pratica caso o usuario esteja utilizando o zoom do navegador */
    }
    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; /** Aplica um efeito de antialiasing */
    }
`;