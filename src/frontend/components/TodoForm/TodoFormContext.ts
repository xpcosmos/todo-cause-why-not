import React, { createContext } from "react"



export type TodoContextPropsType = {
  isFormOpen:boolean,
  setIsFormOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export const defaultProps: TodoContextPropsType = {
  isFormOpen: false,
  setIsFormOpen: () => false
}

export const TodoFormContext = createContext<TodoContextPropsType>(defaultProps)