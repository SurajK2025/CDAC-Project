package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

@Entity(name = "courses")
public class Course extends BaseEntity {
	private String courseName;
	private String author;
	private double price;
	private int duration;
	private String description;
	
	@ManyToMany(mappedBy = "userCourses")
	private List<User> users = new ArrayList<>();
	
	@ManyToMany(mappedBy = "cartCourses")
	private List<Cart> cart = new ArrayList<>();
	
	@ManyToMany(mappedBy = "orderCourses")
	private List<Order> order = new ArrayList<>();
	
	@OneToMany(mappedBy = "course", cascade = CascadeType.ALL,
			fetch=FetchType.LAZY, orphanRemoval = true)
	private List<CourseDetails> courseDetails = new ArrayList<>();
}