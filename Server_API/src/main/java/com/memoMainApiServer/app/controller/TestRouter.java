package com.memoMainApiServer.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping(value = "/test")
@RestController
public class TestRouter {

  @GetMapping("")
  public String index1() {
    return "Hello000!";
  }

  @GetMapping("/35")
  public String index2() {
    return "Hello111!";
  }

}