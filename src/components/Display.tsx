import React, { Component, useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import {GhostInfo} from './GhostInfo'
import { PageHeaders } from './elements'

export const Display = () => {
    const { filteredGhosts } = useContext(GlobalContext)
    const finalResult: boolean = filteredGhosts.length === 1;
    const ghostList = filteredGhosts.map((ghost) => (<p key={ghost.type}>{ghost.type}</p>))

    return (
        <div className="pages">
            <section>
                <PageHeaders>{finalResult ? "Ghost Info" : "Possible Ghosts"}</PageHeaders>
                {finalResult ? <GhostInfo /> : ghostList}
            </section>
        </div>
    )
}
