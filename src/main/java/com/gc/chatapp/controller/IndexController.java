package com.gc.chatapp.controller;

import java.util.Date;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gc.chatapp.services.UserService;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author user
 *
 *         Controller class for index
 */
@Controller
public class IndexController  {

	// inject via application.properties
	@Value("${welcome.message}")
	private String message ;

	// Service
	@Autowired
	private UserService userService;
	
	@RequestMapping(value = { "/", "/index","login.html" })
	public String welcome(Map<String, Object> model) {
		model.put("message", this.message);
		return "index";
	}
	
	@RequestMapping(value = { "forgotPassword.html" })
	public String forgotPassword(Map<String, Object> model) {
		model.put("message", this.message);
		return "forgotPassword";
	}
	@RequestMapping(value = { "resetPassword.html" })
	public String resetPassword(Map<String, Object> model) {
		model.put("message", this.message);
		return "resetPassword";
	}
	
	@RequestMapping(value = { "chatapp.html" })
	public String chatapp(Map<String, Object> model) {
		model.put("message", this.message);
		return "chatapp";
	}
	
	@RequestMapping("/get")
	public String getRest(){
		return "rest_get";
	}
	
	@RequestMapping("/getdata/dataset")
	public @ResponseBody String getRestData(){
	// userService.indexHandler();
		Date date = new Date();
		userService.createUser("userName", "email", 789, "password", date,null, null);
		
		return "rest_get";	
	}


}
