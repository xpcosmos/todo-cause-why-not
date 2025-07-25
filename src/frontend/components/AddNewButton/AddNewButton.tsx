
import { motion, type TargetAndTransition } from "motion/react"
import  "./AddNewButton.scss"
import { useState } from "react"


const AddNewButton = () => {

  const [isFormOpen, setIsFormOpen]  = useState<boolean>(false);


  const to : TargetAndTransition = {
    top:"50%",
    left:  "50%",
    borderRadius: "10px",
    width: "60vw",
    height: "80vh",
    
  }

  return (
    <>
    <motion.div className='add-new' animate={isFormOpen ? to : {}} >
      <button onClick={() => setIsFormOpen(e => !e)} >.</button>
    </motion.div>
    
    
    </>
  )
}

export default AddNewButton