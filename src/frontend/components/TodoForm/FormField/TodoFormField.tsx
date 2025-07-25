import type { TodoFormFieldType } from "./TodoFormFieldType"


const TodoFormField = ({inputType, placeHolder, fieldTitle, isHidden}:TodoFormFieldType) => {
  return (
    <div  hidden={isHidden}>
      <p>{fieldTitle}</p>
      <input type={inputType} placeholder={placeHolder} />
    </div>
  )
}

export default TodoFormField