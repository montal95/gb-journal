import styled from 'styled-components'

export const ClueButton = styled.button`
    margin-bottom: 15px;
    display: inline-block;
    padding: 1em 1em;
    color: #222;
    background: transparent;
    position: relative;
    z-index: 1;
    border-radius: 0.5em;

    &:disabled {
        text-decoration: line-through;
        background: lightgrey right;
        border: 1px solid grey;
        color: grey;
    }
`