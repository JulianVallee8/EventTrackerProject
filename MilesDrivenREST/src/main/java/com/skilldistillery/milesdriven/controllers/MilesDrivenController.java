package com.skilldistillery.milesdriven.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.milesdriven.Mileagedriven;
import com.skilldistillery.milesdriven.data.MilesDrivenService;

@RestController
@RequestMapping("api")
public class MilesDrivenController {

	@Autowired
	private MilesDrivenService mdServ;
	
	@RequestMapping(path="ping", method=RequestMethod.GET)
	public String ping(){
		return "pong";
	}
	
	@RequestMapping(path="days", method=RequestMethod.GET)
	public List<Mileagedriven> indexForMileageDriven(){
		return mdServ.getMileageDrivenById();
	}
	
	@RequestMapping(path="days", method=RequestMethod.POST)
	public Mileagedriven createMileagedriven(@RequestBody Mileagedriven mileagedriven ){
		return mdServ.createMileagedriven(mileagedriven);
	}
	@RequestMapping(path="days/{id}", method=RequestMethod.PATCH)
	public Mileagedriven updateMileagedriven(@PathVariable int id, @RequestBody Mileagedriven mileagedriven ){
		return mdServ.updateMileagedriven(id, mileagedriven);
	}
	@RequestMapping(path="days/{id}", method=RequestMethod.DELETE)
	public boolean deleteMileagedriven(@PathVariable int id){
		return mdServ.deleteMileagedriven(id);
	}
	
	
	
	
	
	
}
