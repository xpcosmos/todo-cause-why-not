package com.xpcosmos.todo_cause_why_not.todo.web;

import org.springframework.web.bind.annotation.RestController;

import com.xpcosmos.todo_cause_why_not.todo.Todo;
import com.xpcosmos.todo_cause_why_not.todo.TodoEnumStatus;
import com.xpcosmos.todo_cause_why_not.todo.TodoRepository;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class TodoController {

  @Autowired
  TodoRepository todoRepository;

  @GetMapping("/todos")
  public List<Todo> getAll() {
    return todoRepository.findAll();
  }

  @PostMapping("/todos")
  public void createTodo(@RequestBody Todo todo) {
    todo.setCreatedAt();
    todo.setModifiedAt();
    todo.setTaskStatus(TodoEnumStatus.Pending);
    todoRepository.insert(todo);
  }

  @GetMapping("/todos/status/{taskStatus}")
  public List<Todo> getByStatus(@PathVariable TodoEnumStatus taskStatus) {
    return todoRepository.findByTaskStatus(taskStatus);
  }
}
