package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;

@Entity(name="carts")
public class Cart extends BaseEntity {
	
	private double cartTotal;
	private int noItems;
	
	@OneToOne
	@JoinColumn(name = "userId", nullable = true)
	private User user;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(
	        name = "Cart_Course", 
	        joinColumns = { @JoinColumn(name = "cartId") }, 
	        inverseJoinColumns = {@JoinColumn(name = "courseId")})
	private List<Course> cartCourses = new ArrayList<>();
}