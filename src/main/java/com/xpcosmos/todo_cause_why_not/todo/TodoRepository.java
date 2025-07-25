package com.xpcosmos.todo_cause_why_not.todo;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends MongoRepository<Todo, ObjectId> {
  public List<Todo> findByTaskStatus(TodoEnumStatus taskStatus);
} 