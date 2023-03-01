package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

@Entity(name = "users")
public class User extends BaseEntity {
	private String fullname;
	private String email;
	private double phone;
	@Enumerated(EnumType.ORDINAL)
	private Gender gender;
	private LocalDate dob;
	
	@OneToOne
	@JoinColumn(name = "username", referencedColumnName = "username")
	private Login login;
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, orphanRemoval = true)
	private Cart cart;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(
	        name = "User_Course", 
	        joinColumns = { @JoinColumn(name = "userId") }, 
	        inverseJoinColumns = {@JoinColumn(name = "courseId")})
	private List<Course> userCourses = new ArrayList<>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL,
			fetch=FetchType.LAZY, orphanRemoval = true)
	private List<Order> orders = new ArrayList<>();
}