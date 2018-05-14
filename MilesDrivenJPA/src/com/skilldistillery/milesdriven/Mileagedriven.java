package com.skilldistillery.milesdriven;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;

@Entity
public class Mileagedriven {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@CreationTimestamp
    @Temporal(TemporalType.DATE)
    @Column(name="day")
	private Date day;
	
	@Column(name="miles_driven")
	private double milesDriven;
	
	//END OF FIELDS
	
	public Mileagedriven() {}
	
	

	@Override
	public String toString() {
		return "MileageDriven [id=" + id + ", day=" + day + ", milesDriven=" + milesDriven + "]";
	}



	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getDay() {
		return day;
	}

	public void setDay(Date day) {
		this.day = day;
	}

	public double getMilesDriven() {
		return milesDriven;
	}

	public void setMilesDriven(double milesDriven) {
		this.milesDriven = milesDriven;
	}
	

	

}
