import styled, { css } from 'styled-components';

export const Container = styled.div`
    max-width: 900px;    
    padding: 1rem;
    margin: 0 auto;
    display: block;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        th {
            color: var(--shape);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
            background: #d79279;

            &:first-child {        
                border-radius: 0.25rem 0rem 0rem 0.25rem;
            }
            &:last-child {              
                border-radius: 0rem 0.25rem 0.25rem 0rem;
            }
            
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape);
            font-weight: 400;
            color: var(--text-body);

            button {
                width: 25%;
                color: var(--shape);
                background: var(--button-color);
                border-radius: 0.25rem;
                height: 2rem;
                font-size: 1.5rem;
                border: 0;
                font-weight: 600;
                transition: filter 0.2s;
                &:hover {
                    filter: brightness(0.8);
                }
            }
            
            &:first-child {        
                border-radius: 0.25rem 0rem 0rem 0.25rem;
            }
            &:last-child {              
                border-radius: 0rem 0.25rem 0.25rem 0rem;
            }
        }        
    }
`;