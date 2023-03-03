package com.app.services;

import java.util.List;

import com.app.dtos.UserRegisterDto;
import com.app.dtos.UserRegisterSuccessDto;
import com.app.pojos.User;

public interface UserService {
	List<User> getAllUsers();
	UserRegisterSuccessDto registerUser(UserRegisterDto user);
	User getUserByUsername(String username);
}
