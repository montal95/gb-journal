import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import {ClueWrapper, PageHeaders} from './elements'


export const ClueList = () => {
    const { clues, handleEvidence, updateFilter, filteredGhosts, reset } = useContext(GlobalContext)

    return (
        <div className="pages">
            <section>
                <PageHeaders>Clue List | <button id="reset" onClick={() => reset()}>Reset</button></PageHeaders>
                <ClueWrapper>
                    {Object.keys(clues).map((clue: string) => {
                        const possibleCheck = filteredGhosts.some(ghost => ghost.clues.includes(clue))

                        return (
                            <button
                                onMouseDown={() => handleEvidence(clue)}
                                onMouseUp={() => updateFilter()}
                                disabled={!possibleCheck}
                                key={clue}>
                                <label>{clue}{clues[clue] ? " ✔" : ""}</label></ button>
                        )
                    })}
                </ClueWrapper>
            </section>
        </div>
    )
}
