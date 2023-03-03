package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dtos.UserRegisterDto;
import com.app.dtos.UserRegisterSuccessDto;
import com.app.pojos.Login;
import com.app.pojos.User;
import com.app.repositories.LoginRepository;
import com.app.repositories.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private LoginRepository loginRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public List<User> getAllUsers() {

		return userRepo.findAll();
	}

	@Override
	public UserRegisterSuccessDto registerUser(UserRegisterDto user) {
				User userEntity = mapper.map(user, User.class);
				
				Login loginEntity = mapper.map(user, Login.class);
				loginEntity.setUser(userEntity);
				loginEntity.setPassword(encoder.encode(loginEntity.getPassword()));
				
				userEntity.setLogin(loginEntity);
				
				User persistentUser = userRepo.save(userEntity);
				loginRepo.save(loginEntity);
				return new UserRegisterSuccessDto("User registered successfully with ID " + persistentUser.getId());
	}

	@Override
	public User getUserByUsername(String username) {
		Login login = loginRepo.findById(username).orElseThrow(() -> new RuntimeException("User Not Found"));
		return userRepo.findByLogin(login).orElseThrow(() -> new RuntimeException("User Not Found"));
	}
}
