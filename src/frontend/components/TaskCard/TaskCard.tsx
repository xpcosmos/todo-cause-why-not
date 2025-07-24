import { Md5 } from "ts-md5"
import type { TodoType } from "../../api/models/TodoType"
import "./TaskCard.scss"

function TaskCard( {...props}: TodoType){
  return (
    <>
    <div className="task-card" key={  Md5.hashStr(JSON.stringify(props.id))}>
      <div className="task-card-status">
        <p>{props.taskStatus}</p>
      </div>
      <div className="task-card-callout">
        <h2>{props.taskTitle}</h2>
        <p>{props.taskDescription}</p>
      </div>
      <div className="task-card-time">
        <p>
          {props.startDateTime}
        </p>
      </div>
    </div>
    </>
  )
}

export default TaskCard