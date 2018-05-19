package com.skilldistillery.milesdriven.data;

import java.util.List;

import com.skilldistillery.milesdriven.Mileagedriven;

public interface MilesDrivenService {
	
	public List<Mileagedriven> getMileageDrivenById();
	public Mileagedriven show(int id);
	public Mileagedriven createMileagedriven(Mileagedriven mileagedriven);
	public Mileagedriven updateMileagedriven(int id, Mileagedriven mileagedriven);
	public boolean deleteMileagedriven(int id);
	
}
