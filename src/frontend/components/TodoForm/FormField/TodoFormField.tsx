import type { TodoFormFieldType } from "./TodoFormFieldType"
import "./TodoFormField.scss"


const TodoFormField = ({inputType, placeHolder, fieldTitle, isHidden}:TodoFormFieldType) => {
  return (
    <div className="form-field" hidden={isHidden}>
      <div className="form-field-title">
        <p>{fieldTitle}</p>
      </div>
      <div className="form-field-input">
        <input type={inputType} placeholder={placeHolder} />
      </div>
    </div>
  )
}

export default TodoFormField