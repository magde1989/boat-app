package com.app.boat.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BoatController {

	@RequestMapping("/")  
	public String hello()   
	{  
	return "Hello User";  
	}  

}