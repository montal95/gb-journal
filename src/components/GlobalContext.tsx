import React, { createContext, useReducer } from 'react';
import { default as data } from '../data.json'

//defining the datatypes in the initial Values
type GhostList = {
    type: string,
    clues: string[],
    strengths: string,
    weakness: string,
}[]

type Data = {
    clues: { [key: string]: boolean },
    ghosts: GhostList,
    filteredGhosts: GhostList,
    handleEvidence: (str: string) => {} | void,
    updateFilter: () => {} | void
}

const initialValues: Data = {
    clues: data.clues.reduce((accumulation, clue) => ({ ...accumulation, [clue]: false }), {}),
    ghosts: data.ghosts,
    filteredGhosts: data.ghosts,
    handleEvidence: () => ({}),
    updateFilter: () => ({})
}

export const GlobalContext = createContext(initialValues);

type Action = { type: "evidence" | "filter", payload: any }

const reducer = (state: Data, action: Action) => {
    switch (action.type) {
        case "evidence":
            return { ...state, clues: { ...state.clues, [action.payload]: !state.clues[action.payload] } };
        case "filter":
            return { ...state, filteredGhosts: action.payload }
        default:
            return state;
    }
}

export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);
    const filter = () => {
        let filteredClues: string[] = []
        let res: GhostList = []

        for (const key in state.clues) {
            if (state.clues[key]) { filteredClues.push(key) }
        }

        state.ghosts.forEach((ghost) => {
            let obj: { [key: string]: number } = {};
            ghost.clues.forEach((clue, index) => {
                obj[clue] = index;
            })
            let isSubset = filteredClues.every((clue) => {
                return obj[clue] !== undefined;
            })
            if (isSubset) { res.push(ghost) }
        })

        dispatch({ type: "filter", payload: res })
    }

    return (
        <GlobalContext.Provider value={{
            clues: state.clues,
            ghosts: state.ghosts,
            filteredGhosts: state.filteredGhosts,
            handleEvidence: (str: string) => dispatch({ type: "evidence", payload: str }),
            updateFilter: () => filter()
        }}>
            {children}
        </GlobalContext.Provider>
    )
}