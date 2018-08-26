package com.gc.chatapp.controller;


import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



/**
 * @author user
 * This is Rest Controller. 
 */
@RestController
public class AdminController {
	@Value("${welcome.admin.message}")
	private String message ;

	@RequestMapping("/admin/home")
	public String welcome1() {
		
		return message;
	}

}
