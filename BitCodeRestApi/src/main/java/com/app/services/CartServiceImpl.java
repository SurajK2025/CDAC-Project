package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Course;
import com.app.repositories.CartRepository;

@Service
@Transactional
public class CartServiceImpl {
	
	@Autowired
	private CartRepository cartRepo;

	@Autowired
	private ModelMapper mapper;

	
}
