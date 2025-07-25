
import { motion, type TargetAndTransition } from "motion/react"
import  "./AddNewButton.scss"
import { useContext } from "react"
import { TodoFormContext } from "../TodoForm/TodoFormContext"


const AddNewButton = () => {

  const {isFormOpen, setIsFormOpen} = useContext(TodoFormContext)
  
  const toButton : TargetAndTransition = {
    top:"3%",
    left: "93%"
  }

  return (
    <>
      <motion.button animate = {isFormOpen? toButton : {}} className="add-new-button" onClick={() => setIsFormOpen(e => !e)} >
        x
      </motion.button>
    </>
  )
}

export default AddNewButton