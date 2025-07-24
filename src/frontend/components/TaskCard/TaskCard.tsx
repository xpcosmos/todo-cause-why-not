import type { ITodo } from "../../api/models/Todo"

function TaskCard( props: ITodo){
  return (
    <>
    <div className="task-card">
      <div className="task-card-status">
        {props.taskStatus.label}
      </div>
      <div className="task-card-callout">
        <h2>{props.taskTitle}</h2>
        <p>{props.taskDescription}</p>
      </div>
    </div>
    </>
  )
}

export default TaskCard