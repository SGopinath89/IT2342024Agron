package com.example.books.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document


public class Peoplesaid {
	
	@Id

	private String id;
	private String companyname;
	private String peopleimg;
	private String peoplename;
	private String place;
	private String status;
	private String description;
	public Peoplesaid(String id, String companyname, String peopleimg, String peoplename, String place, String status,
			String description) {
		super();
		this.id = id;
		this.companyname = companyname;
		this.peopleimg = peopleimg;
		this.peoplename = peoplename;
		this.place = place;
		this.status = status;
		this.description = description;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	public String getPeopleimg() {
		return peopleimg;
	}
	public void setPeopleimg(String peopleimg) {
		this.peopleimg = peopleimg;
	}
	public String getPeoplename() {
		return peoplename;
	}
	public void setPeoplename(String peoplename) {
		this.peoplename = peoplename;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
   
	
}
