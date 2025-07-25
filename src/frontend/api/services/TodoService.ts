
import type { TodoType } from "../models/TodoType";
import type { TodoRepository } from "../repositories/TodoRepository";
import type { StatusType } from "../Status";

export class TodoService implements TodoRepository{

  async findByStatus(status: StatusType): Promise<Array<TodoType>> {
    const res =  await fetch(`http://localhost:8080/todos/status/${status.value}`)
    if (!res.ok){
      throw res.status
    }
    return await res.json();
    
  }

}