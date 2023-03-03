package com.app.services;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Course;
import com.app.repositories.CourseRepository;

@Service
@Transactional
public class CourseServiceImpl implements CourseService {

	@Autowired
	private CourseRepository courseRepo;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<Course> getAllCourses() {

		return courseRepo.findAll();
	}
}
