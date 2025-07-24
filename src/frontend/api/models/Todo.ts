import type { StatusType } from "../Status";

export interface ITodo {
  id: string;
  taskTitle: string;
  taskDescription: string;
  expectedCompletion: Date;
  startDateTime: Date;
  createdAt: Date;
  modifiedAt: Date;
  taskStatus: StatusType;
}
