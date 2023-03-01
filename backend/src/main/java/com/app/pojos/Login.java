package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity(name = "logins")
public class Login {
	@Id @Column(length = 20, unique = true, updatable = false, nullable = false)
	private String username;

	@Column(length = 20, nullable = false)
	private String password;

	@OneToOne(mappedBy = "login", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, orphanRemoval = true)
	private Admin admin;

	@OneToOne(mappedBy = "login", cascade = CascadeType.ALL, 
			fetch = FetchType.LAZY, orphanRemoval = true)
	private User user;
}
