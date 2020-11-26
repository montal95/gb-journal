import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

export const ClueList = () => {
    const { clues, handleEvidence, updateFilter, filteredGhosts } = useContext(GlobalContext)
    return (
        <div className="pages">
            <section>
                <h2>Clue List</h2>
                {Object.keys(clues).map((clue: string) => {
                    const possible = filteredGhosts.some(ghost => ghost.clues.includes(clue))

                    return (<div className="clueListBox" key={clue}>
                        <input type="checkbox"
                            onMouseDown={() => handleEvidence(clue)}
                            onMouseUp={() => updateFilter()}
                            disabled={!possible} />
                        <label>{clue}</label>
                    </div>)
                })}
            </section>
        </div>
    )
}
