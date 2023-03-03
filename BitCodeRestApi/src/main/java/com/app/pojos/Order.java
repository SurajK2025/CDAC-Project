package com.app.pojos;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

@Entity(name = "Orders")
public class Order extends BaseEntity {

	@CreationTimestamp
	private LocalDate date;
	
	@ManyToOne
	@JoinColumn(name = "userId")
	private User user;
	
	private double amount;
	
	@ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(
	        name = "Order_Course", 
	        joinColumns = { @JoinColumn(name = "orderId") }, 
	        inverseJoinColumns = {@JoinColumn(name = "courseId")})
	private List<Course> orderCourses = new ArrayList<>();
	
	@OneToOne(mappedBy = "order", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, orphanRemoval = true)
	private TransactionDetail transactionDetail;
}