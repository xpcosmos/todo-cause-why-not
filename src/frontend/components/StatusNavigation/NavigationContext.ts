import React, { createContext } from "react";
import type { StatusType } from "../../api/Status";

export type StateContext = {
  currentTab: StatusType;
  setCurrentTab: React.Dispatch<React.SetStateAction<StatusType>>;
};

export const NavigationContext = createContext<StateContext | null>(null);
