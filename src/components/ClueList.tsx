import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

export const ClueList = () => {
    const { clues, handleEvidence, updateFilter, filteredGhosts, reset } = useContext(GlobalContext)
    return (
        <div className="pages">
            <section>
                <h2>Clue List | <button id="reset" onClick={() => reset()}>Reset</button></h2>
                {Object.keys(clues).map((clue: string) => {
                    const possible = filteredGhosts.some(ghost => ghost.clues.includes(clue))

                    return (<div className="clueListBox" key={clue}>
                        <button
                            onMouseDown={() => handleEvidence(clue)}
                            onMouseUp={() => updateFilter()}
                            disabled={!possible} >
                            <label>{clue}{clues[clue] ? " ✔" : ""}</label></ button>
                    </div>)
                })}
            </section>
        </div>
    )
}
