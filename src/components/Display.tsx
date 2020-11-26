import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'


export const Display = () => {
    const { filteredGhosts } = useContext(GlobalContext)

    return (
        <div className="pages">
            <section>
                <h2>Possible Ghosts</h2>
                {filteredGhosts.map((ghost) => (<p key={ghost.type}>{ghost.type}</p>))}
            </section>
        </div>
    )
}
