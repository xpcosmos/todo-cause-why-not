package com.xpcosmos.todo_cause_why_not.todo;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Todo")
public class Todo {
  
  @Id
  private ObjectId id;
  private String taskTitle;
  private String taskDescription;
  private LocalDateTime expectedCompletion;
  private LocalDateTime startDateTime;

}
