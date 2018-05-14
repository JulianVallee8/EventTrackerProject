package com.skilldistillery.milesdriven.data;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.milesdriven.Mileagedriven;
import com.skilldistillery.milesdriven.repositories.MilesDrivenRepository;

@Service
public class MilesDrivenServiceImpl implements MilesDrivenService {

	@Autowired
	private MilesDrivenRepository mdRepo;


	@Override
	public List<Mileagedriven> getMileageDrivenById() {
		return mdRepo.findAll();
		
	}


	@Override
	public Mileagedriven createMileagedriven(Mileagedriven mileagedriven) {
		
		return mdRepo.saveAndFlush(mileagedriven);
	}


	@Override
	public Mileagedriven updateMileagedriven(int id, Mileagedriven mileagedriven) {
		Optional<Mileagedriven> md = mdRepo.findById(id);
		Mileagedriven update = md.get();
		if(mileagedriven.getMilesDriven() != 0) {
			update.setMilesDriven(mileagedriven.getMilesDriven());
		}
		if(mileagedriven.getDay() != null) {
			update.setDay(mileagedriven.getDay());
		}
		
		return mdRepo.saveAndFlush(update);
	}


	@Override
	public boolean deleteMileagedriven(int id) {
		
	 try {
		mdRepo.deleteById(id);
		return true;
	} 
	 catch (Exception e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	 return false;
	}

	
	
	
	
	
}
