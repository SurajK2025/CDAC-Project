package com.app.controllers;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Course;
import com.app.services.CourseService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/courses")
public class CourseController {

	@Autowired
	private CourseService courseService;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private JavaMailSender sender;

	@GetMapping
	public List<Course> getAllUsers() {
		System.out.println("in get all emps");
		return courseService.getAllCourses();
	}	
}
