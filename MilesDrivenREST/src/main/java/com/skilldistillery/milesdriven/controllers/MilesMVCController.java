package com.skilldistillery.milesdriven.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MilesMVCController {
	
	@RequestMapping(path="/")
	public String home() {
		return "index.html";
	}

}
