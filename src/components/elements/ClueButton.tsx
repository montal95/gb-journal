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

    &::before{
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background: #222;
        border: 2px solid #222;
        transition: transform 0.5s ease;
        transform: scaleX(0);
        transform-origin: left;
    }

    &:hover{
        color: #fff;
    }

    &:hover::before{
        transform: scaleX(1);
    }

    &:hover:disabled::before {
        transform: scale(0);
    }

    &:hover:disabled {
        color: grey;
    }
`