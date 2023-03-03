package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class CourseDetails extends BaseEntity {
	@ManyToOne
	@JoinColumn(name = "courseId")
	private Course course;
	
	@Column(nullable = false, unique = true)
	private String chapters;
}
