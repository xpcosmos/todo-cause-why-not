import { motion, type TargetAndTransition } from "motion/react";
import "./TodoForms.scss";
import { useState } from "react";
import { TodoFormContext } from "./TodoFormContext";
import AddNewButton from "../AddNewButton/AddNewButton";
import TodoFormField from "./FormField/TodoFormField";

const TodoForms = () => {
  const [isFormOpen, setIsFormOpen] = useState<boolean>(false);

  const toDiv: TargetAndTransition = {
    top: "50%",
    left: "50%",
    borderRadius: "10px",
    width: "60vw",
    height: "80vh"
  };

  return (
    <>
      <TodoFormContext value={{ isFormOpen, setIsFormOpen }}>
        <motion.form className="base-form" animate={isFormOpen ? toDiv : {}}>
          <AddNewButton />
          <TodoFormField
            isHidden={!isFormOpen}
            inputType="text"
            placeHolder="Adicione seu texto"
            fieldTitle="Titulo"/>
        </motion.form>
      </TodoFormContext>
    </>
  );
};

export default TodoForms;
