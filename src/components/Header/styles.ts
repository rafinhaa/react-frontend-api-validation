import styled from 'styled-components';

export const Container = styled.header`
    background-color: var(--red);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto; /* centraliza o conteúdo */
    padding: 2rem 1rem 12rem; // 1rem = ao font-size do :root - estamos colocando 16px (1rem) nas laterais e 12rem (192px) para baixo */
    align-items: center; /* centraliza o conteúdo */

    h1, h3 {
        color: #41332f;
    }

    a {
        color: var(--shape);
        text-decoration: none;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }
    }
`;