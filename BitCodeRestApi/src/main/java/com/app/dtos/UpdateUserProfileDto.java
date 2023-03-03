package com.app.dtos;

import java.time.LocalDate;

public class UpdateUserProfileDto {
	private String fullname;
	private String email;
	private double phone;
	private LocalDate dob;
	
	public UpdateUserProfileDto(String fullname, String email, double phone, LocalDate dob) {
		super();
		this.fullname = fullname;
		this.email = email;
		this.phone = phone;
		this.dob = dob;
	}
}