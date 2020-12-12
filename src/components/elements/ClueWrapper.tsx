import styled from 'styled-components';

export const ClueWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 5px;
        button {
            margin-bottom: 15px;
            display: inline-block;
            padding: 8px 16px;
            border: none;
            &:disabled {
                text-decoration: line-through;
            }
        }
    `;