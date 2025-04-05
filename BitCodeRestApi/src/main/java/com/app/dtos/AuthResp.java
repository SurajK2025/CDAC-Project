package com.app.dtos;

public class AuthResp {
	private String message;
	private String jwt;
	private Object user;

	public AuthResp(String message, String jwt, Object user) {
		super();
		this.message = message;
		this.jwt = jwt;
		this.user = user;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public Object getUser() {
		return user;
	}

	public void setUser(Object user) {
		this.user = user;
	}
}