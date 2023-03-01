package com.app.services;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.User;

import lombok.extern.slf4j.Slf4j;

@Service
@Transactional
@Slf4j
public class UserServiceImpl implements UserService {
	
	@Value("${file.upload.location}")
	private String baseFolder;

	// mapper
	@Autowired
	private ModelMapper mapper;

	@Autowired
	private UserRepository userRepositary;

	// password encoder
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public List<UserDto> getAllUsers() {
		log.info("In User service implimentation : getAllCustomer ");
		List<User> customer = userRepositary.findAllCustomer();
		List<UserDto> listCustomer = new ArrayList<UserDto>();
		for (User cust : customer) {
			listCustomer.add(mapper.map(cust, UserDto.class));
		}
		return listCustomer;
	}

}
