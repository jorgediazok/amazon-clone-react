//setting up the data layer 

import React, { createContext, useContext, useReducer } from "react";


//THIS IS THE DATA LAYER . Estoy creando el contexto pero todavía sin data.
// @ts-ignore
export const StateContext = createContext()

//BUILD A PROVIDER (wrap entire app inside this provider)
export const StateProvider = ({reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//THIS IS HOW TO USE IT INSIDE A COMPONENT
export const useStateValue = () => useContext(StateContext)