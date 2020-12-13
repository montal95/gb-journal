import React, { useContext } from 'react'
import { GlobalContext } from './GlobalContext'
import { ClueWrapper, PageHeaders, ResetButton } from './elements'
import {ClueButtons} from './ClueButtons'


export const ClueList = () => {
    const { clues, filteredGhosts, reset } = useContext(GlobalContext)

    return (
        <div className="pages">
            <section>
                <PageHeaders>Clue List | <ResetButton onClick={() => reset()}>Reset</ResetButton></PageHeaders>
                <ClueWrapper>
                    {Object.keys(clues).map((clue: string) => {
                        const possibleCheck = filteredGhosts.some(ghost => ghost.clues.includes(clue))

                        return (
                            <ClueButtons clue={clue} possibleCheck={possibleCheck} key={clue} />
                        )
                    })}
                </ClueWrapper>
            </section>
        </div>
    )
}
