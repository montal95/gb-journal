import React, { createContext, useReducer } from 'react';
import { default as data } from '../data.json'

//defining the datatypes in the initial Values
type Data = {
    clues: { [key: string]: boolean },
    ghosts: {
        type: string,
        clues: string[],
        strengths: string,
        weakness: string,
    }[],
    filteredGhosts: {
        type: string,
        clues: string[],
        strengths: string,
        weakness: string,
    }[],
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

type Action = { type: "evidence" | "filter", payload: string }

const reducer = (state: Data, action: Action) => {
    switch (action.type) {
        case "evidence":
            return { ...state, clues: { ...state.clues, [action.payload]: !state.clues[action.payload] } };
        case "filter":
            return { ...state, filteredGhosts: [] }
        default:
            return state;
    }
}

export const GlobalProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues);
    return (
        <GlobalContext.Provider value={{
            clues: state.clues,
            ghosts: state.ghosts,
            filteredGhosts: state.filteredGhosts,
            handleEvidence: (str: string) => dispatch({ type: "evidence", payload: str }),
            updateFilter: () => dispatch({ type: "filter", payload: "" })
        }}>
            {children}
        </GlobalContext.Provider>
    )
}