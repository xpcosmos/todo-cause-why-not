import type { ITodo } from "../models/Todo"
import type { StatusType } from "../Status"

export abstract class TodoRepository {
  abstract findByStatus(status:StatusType):Promise<ITodo>;
}