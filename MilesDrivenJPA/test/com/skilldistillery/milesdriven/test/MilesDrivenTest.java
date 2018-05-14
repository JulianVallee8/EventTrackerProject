package com.skilldistillery.milesdriven.test;

import static org.junit.Assert.assertEquals;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import com.skilldistillery.milesdriven.Mileagedriven;

class MilesDrivenTest {
	private EntityManagerFactory emf;
	private EntityManager em;

	@BeforeEach
	void setUp() throws Exception {
		emf =
		Persistence.createEntityManagerFactory("MileageDriven");
		em = emf.createEntityManager();
	}

	@AfterEach
	void tearDown() throws Exception {
		 em.close();
	     emf.close();
	}

	@Test
	void test_milesDriven_mapping() {
		Mileagedriven md = em.find(Mileagedriven.class, 1);
		assertEquals("2.32", md.getMilesDriven() + "");
	}

}
