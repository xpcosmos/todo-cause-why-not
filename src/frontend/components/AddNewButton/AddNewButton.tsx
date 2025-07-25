
import { motion, type TargetAndTransition } from "motion/react"
import  "./AddNewButton.scss"
import { useState } from "react"


const AddNewButton = () => {

  const [isFormOpen, setIsFormOpen]  = useState<boolean>(false);


  const toDiv : TargetAndTransition = {
    top:"50%",
    left:  "50%",
    borderRadius: "10px",
    width: "60vw",
    height: "80vh",
  }
  const toButton : TargetAndTransition = {
    top:"3%",
    left: "93%"
  }

  return (
    <>
    <motion.div className='add-new' animate={isFormOpen ? toDiv : {}}>
      <motion.button animate = {isFormOpen? toButton : {}} className="add-new-button" onClick={() => setIsFormOpen(e => !e)} >
        x
      </motion.button>
  
    </motion.div>
    
    
    </>
  )
}

export default AddNewButton