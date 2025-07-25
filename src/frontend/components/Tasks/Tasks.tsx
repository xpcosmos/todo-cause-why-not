import { useContext, useEffect, useState } from "react";
import { TodoService } from "../../api/services/TodoService";
import type { TodoType } from "../../api/models/TodoType";
import TaskCard from "../TaskCard/TaskCard";
import { NavigationContext } from "../StatusNavigation/NavigationContext";

function Tasks() {
  const [resquestResponse, setResquestResponse] = useState<Array<TodoType>>([]);
  const { currentTab } = { ...useContext(NavigationContext) };

  useEffect(() => {
    const todoService = new TodoService();
    const fetchApi = async () => {
      const response = await todoService.findByStatus(currentTab!);
      setResquestResponse(response);
    };

    fetchApi();
  }, [currentTab]);

  return (
    <>
      {resquestResponse.map((v) => (
        <TaskCard {...v} key={v.id + v.createdAt}/>
      ))}
    </>
  );
}

export default Tasks;
