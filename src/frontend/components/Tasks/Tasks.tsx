import { useEffect, useState } from "react";
import { TodoService } from "../../api/services/TodoService";
// import type { StatusType } from "../../api/Status";
import type { TodoType } from "../../api/models/Todo";
import Status from "../../api/Status";
import TaskCard from "../TaskCard/TaskCard";

function Tasks() {
  const [res, setRes] = useState<Array<TodoType>>([]);

  useEffect(() => {
    const todoService = new TodoService();
    const fetchApi = async () => {
      try{
        const response = await todoService.findByStatus(Status.pending);
        console.log(response)
        setRes(response);
      } catch{
        throw new Error("Reponse error!");
      }
    };
    
    fetchApi();
  }, []);

  return <>{
    res.map(v => <TaskCard {...v} key={v.id} />)
    }</>;
}

export default Tasks;
