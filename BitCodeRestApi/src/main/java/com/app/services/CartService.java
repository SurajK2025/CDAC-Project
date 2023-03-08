package com.app.services;

import java.util.List;

import com.app.dtos.AddCourseToCartDto;
import com.app.pojos.Course;

public interface CartService {
	String addCourseToCart(AddCourseToCartDto courseToCartDto);
	List<Course> getCourseInCartByUserId(Long userid);
	Long getCartTotalByUserId(Long userid);
}
