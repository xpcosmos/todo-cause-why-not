import React, { createContext } from "react";



export type StateContext = {
  currentTab : string,
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>,
}

export const NavigationContext = createContext<StateContext | null>(null)