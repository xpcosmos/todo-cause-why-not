package com.xpcosmos.todo_cause_why_not;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import com.xpcosmos.todo_cause_why_not.todo.TodoRepository;

@SpringBootApplication
@EnableMongoRepositories
@ComponentScan(basePackageClasses  = TodoRepository.class )
public class TodoCauseWhyNotApplication {	

	public static void main(String[] args) {
		SpringApplication.run(TodoCauseWhyNotApplication.class, args);
	}

}