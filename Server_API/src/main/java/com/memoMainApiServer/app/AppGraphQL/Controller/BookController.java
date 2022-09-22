package com.memoMainApiServer.app.AppGraphQL.Controller;

import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.graphql.data.method.annotation.SchemaMapping;
import org.springframework.stereotype.Controller;

import com.memoMainApiServer.app.AppGraphQL.Service.Author;
import com.memoMainApiServer.app.AppGraphQL.Service.Book;

@Controller
public class BookController {
  @QueryMapping
  public Book bookById(@Argument String id) {
    return Book.getById(id);
  }

  @SchemaMapping
  public Author author(Book book) {
    return Author.getById(book.getAuthorId());
  }
}