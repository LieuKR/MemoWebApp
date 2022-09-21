package com.memoMainApiServer.app.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RESTController {

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public String index() {
    return "Hello!";
  }

}
