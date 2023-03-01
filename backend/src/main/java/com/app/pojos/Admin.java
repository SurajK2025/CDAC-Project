package com.app.pojos;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name = "admins")
public class Admin extends BaseEntity {
	
	private String fullname;
	private String email;
	
	@OneToOne
	@JoinColumn(name = "username", referencedColumnName = "username")
	private Login login;
}