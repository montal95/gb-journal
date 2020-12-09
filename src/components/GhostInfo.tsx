import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'

const GhostInfo = () => {
    const { filteredGhosts } = useContext(GlobalContext)

    return (
        <div>
            <p><strong>Strengths: </strong>{filteredGhosts[0].strengths}</p>
            <p><strong>Weakness: </strong>{filteredGhosts[0].weakness}</p>
        </div>
    )
}

export default GhostInfo;