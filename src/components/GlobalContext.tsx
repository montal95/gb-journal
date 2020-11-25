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
    // filteredGhosts: {
    //     type: string,
    //     clues: string[],
    //     strengths: string,
    //     weakness: string,
    // }[],
}

const initialValues: Data = {
    clues: data.clues.reduce((accumulation, clue) => ({ ...accumulation, [clue]: false }), {}),
    ghosts: data.ghosts,
    // filteredGhosts: [],
}

export const GlobalContext = createContext(initialValues);

export const GlobalProvider: React.FC = ({ children }) => {
    return (
        <GlobalContext.Provider value={initialValues}>
            {children}
        </GlobalContext.Provider>
    )
}