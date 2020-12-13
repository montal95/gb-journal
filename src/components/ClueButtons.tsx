import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import { ClueButton } from './elements'

type ClueButtonProps = {
    clue: string,
    possibleCheck: boolean
}

const selected = {
    color: "#fff",
    background: "#222"
}

export const ClueButtons = ({ clue, possibleCheck }: ClueButtonProps) => {
    const { clues, handleEvidence, updateFilter } = useContext(GlobalContext)

    return (
        <ClueButton
            style={clues[clue] ? selected : {}}
            onMouseDown={() => handleEvidence(clue)}
            onMouseUp={() => updateFilter()}
            disabled={!possibleCheck}>
            <label>{clue}{clues[clue] ? " ✔" : ""}</label></ClueButton>
    )
}
