package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import org.hibernate.annotations.CreationTimestamp;

@Entity(name = "TransactionDetails")
public class TransactionDetail extends BaseEntity{
	
	@OneToOne
	@JoinColumn(name = "orderId", referencedColumnName = "id")
	private Order order;
	
	private double UTRno;
	
	private double amount;
	
	@CreationTimestamp
	private LocalDate date;
}