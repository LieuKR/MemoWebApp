package com.memoMainApiServer.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

  @Autowired
  com.memoMainApiServer.app.service.TestService TestService;

  @RequestMapping(value = "/", method = RequestMethod.GET)
  public String index() {
    return TestService.SendHello();
  }

}
