import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import styled from 'styled-components'


export const ClueList = () => {
    const { clues, handleEvidence, updateFilter, filteredGhosts, reset } = useContext(GlobalContext)
    const ClueWrapper = styled.div`
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

    return (
        <div className="pages">
            <section>
                <h2>Clue List | <button id="reset" onClick={() => reset()}>Reset</button></h2>
                <ClueWrapper>
                    {Object.keys(clues).map((clue: string) => {
                        const possible = filteredGhosts.some(ghost => ghost.clues.includes(clue))

                        return (
                            <button
                                onMouseDown={() => handleEvidence(clue)}
                                onMouseUp={() => updateFilter()}
                                disabled={!possible} >
                                <label>{clue}{clues[clue] ? " ✔" : ""}</label></ button>
                        )
                    })}
                </ClueWrapper>
            </section>
        </div>
    )
}
