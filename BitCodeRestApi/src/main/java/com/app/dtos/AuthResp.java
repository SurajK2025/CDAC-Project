package com.app.dtos;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
public class AuthResp {
	private String message;
	private String jwt;

	public AuthResp(String message, String jwt) {
		super();
		this.message = message;
		this.jwt = jwt;
	}
}