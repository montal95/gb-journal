import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

export const ClueList = () => {
    const { clues, handleEvidence, updateFilter } = useContext(GlobalContext)
    
    return (
        <div className="pages">
            <section>
                <h2>Clue List</h2>
                {Object.keys(clues).map((clue: string) => {
                    return (<div className="clueListBox" key={clue}>
                        <input type="checkbox"
                            onChange={() => {
                                handleEvidence(clue)
                                updateFilter()
                            }}
                            disabled={false} />
                        <label>{clue}</label>
                    </div>)
                })}
            </section>
        </div>
    )
}
