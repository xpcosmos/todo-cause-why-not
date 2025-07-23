package com.xpcosmos.todo_cause_why_not.todo;

import java.time.LocalDateTime;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;

@Document("Todo")
public class Todo {

  @Id
  private ObjectId id;
  private String taskTitle;
  private String taskDescription;
  private LocalDateTime expectedCompletion;
  private LocalDateTime startDateTime;
  @CreatedDate
  private LocalDateTime createdAt;
  @LastModifiedDate
  private LocalDateTime modifiedAt;

  public Todo() {
  }

  public ObjectId getId() {
    return this.id;
  }

  public String getTaskTitle() {
    return this.taskTitle;
  }

  public void setTaskTitle(String value) {
    this.taskTitle = value;
  }

  public String getTaskDescription() {
    return this.taskDescription;
  }

  public void setTaskDescription(String value) {
    this.taskDescription = value;
  }

  public LocalDateTime getExpectedCompletion() {
    return this.expectedCompletion;
  }

  public void setExpectedCompletion(LocalDateTime value) {
    this.expectedCompletion = value;
  }

  public LocalDateTime getStartDateTime() {
    return this.startDateTime;
  }

  public void setStartDateTime(LocalDateTime value) {
    this.startDateTime = value;
  }

  public LocalDateTime getCreatedAt() {
    return this.createdAt;
  }

  public LocalDateTime getModifiedAt() {
    return this.modifiedAt;
  }

}
