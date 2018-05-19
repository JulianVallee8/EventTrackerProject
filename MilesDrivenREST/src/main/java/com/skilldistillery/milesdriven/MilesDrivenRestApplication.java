package com.skilldistillery.milesdriven;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class MilesDrivenRestApplication extends SpringBootServletInitializer {
	  @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
	    return application.sources(MilesDrivenRestApplication.class);
	  }

	public static void main(String[] args) {
		SpringApplication.run(MilesDrivenRestApplication.class, args);
	}
}
