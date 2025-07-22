package com.xpcosmos.todo_cause_why_not.todo;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.MongoId;

import com.xpcosmos.todo_cause_why_not.TaskStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Todo {
  
  @Id
  @MongoId
  private ObjectId id;
  private String task;
  private TaskStatus status;
  private LocalDateTime competionDateTime;
}