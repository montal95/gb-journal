import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import GhostInfo from './GhostInfo'
import { PageHeaders } from './elements'

export const Display = () => {
    const { filteredGhosts } = useContext(GlobalContext)
    const finalResult: boolean = filteredGhosts.length === 1;

    return (
        <div className="pages">
            <section>
                <PageHeaders>{finalResult ? "Ghost Info" : "Possible Ghosts"}</PageHeaders>
                {filteredGhosts.map((ghost) => (<p key={ghost.type}>{ghost.type}</p>))}
                {finalResult ? <GhostInfo /> : ""}
            </section>
        </div>
    )
}
