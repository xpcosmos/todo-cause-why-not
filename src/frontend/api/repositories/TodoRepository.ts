import type { TodoType } from "../models/TodoType"
import type { StatusType } from "../Status"

export abstract class TodoRepository {
  abstract findByStatus(status:StatusType):Promise<Array<TodoType>>;
}