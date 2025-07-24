import type { StatusType } from "../Status";

export type TodoType = {
  id: string;
  taskTitle: string;
  taskDescription?: string;
  expectedCompletion?: Date;
  startDateTime?: Date;
  createdAt: Date;
  modifiedAt: Date;
  taskStatus: StatusType;
}
