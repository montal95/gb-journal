import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import GhostInfo from './GhostInfo'


export const Display = () => {
    const { filteredGhosts } = useContext(GlobalContext)
    const finalResult: boolean = filteredGhosts.length === 1;

    return (
        <div className="pages">
            <section>
                <h2>{finalResult ? "Ghost Info" : "Possible Ghosts"}</h2>
                {filteredGhosts.map((ghost) => (<p key={ghost.type}>{ghost.type}</p>))}
                {finalResult ? <GhostInfo /> : ""}
            </section>
        </div>
    )
}
