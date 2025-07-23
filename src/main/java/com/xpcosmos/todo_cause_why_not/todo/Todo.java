package com.xpcosmos.todo_cause_why_not.todo;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;


@Document(collection = "todolist")
public class Todo {

  @MongoId
  private ObjectId id;
  private String task;
  private LocalDateTime competionDateTime;

  public Todo(){ }

  public ObjectId getId(){
    return this.id;
  }

  public void setTask(String t){
    this.task = t;
  }

  public String getTask(){
    return this.task;
  }

  public void setCompetionDateTime(LocalDateTime ctd){
    this.competionDateTime = ctd;
  }

  public LocalDateTime getCompetionDateTime(){
    return this.competionDateTime;
  }

}