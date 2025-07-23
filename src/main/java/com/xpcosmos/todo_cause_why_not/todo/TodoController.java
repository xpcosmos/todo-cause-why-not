package com.xpcosmos.todo_cause_why_not.todo;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
public class TodoController {
  
  @Autowired TodoRepository todoRepository;

  @GetMapping("/todos")
  public List<Todo> findAllTodo(){
    return todoRepository.findAll();
  }

  @PostMapping("/todos")
  public void createTodo(@RequestBody Todo todo){
    todoRepository.insert(todo);
  }
}
