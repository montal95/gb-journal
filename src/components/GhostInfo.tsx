import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import { InfoHeader } from './elements'

export const GhostInfo = () => {
    const { filteredGhosts } = useContext(GlobalContext)

    return (
        <div>
            <InfoHeader>{filteredGhosts[0].type}</InfoHeader>
            <p><strong>Strengths: </strong>{filteredGhosts[0].strengths}</p>
            <p><strong>Weakness: </strong>{filteredGhosts[0].weakness}</p>
        </div>
    )
}