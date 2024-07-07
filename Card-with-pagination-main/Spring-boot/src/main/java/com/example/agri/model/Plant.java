package com.example.agri.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document

public class Plant {
	@Id
//	private Integer id;
	private String id;
	private String title;
	private String description;
	private String avatarUrl;
	private String imageUrl;
	private String descripe;
	public Plant(String id, String title, String description, String avatarUrl, String imageUrl, String descripe) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.avatarUrl = avatarUrl;
		this.imageUrl = imageUrl;
		this.descripe = descripe;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getAvatarUrl() {
		return avatarUrl;
	}
	public void setAvatarUrl(String avatarUrl) {
		this.avatarUrl = avatarUrl;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getDescripe() {
		return descripe;
	}
	public void setDescripe(String descripe) {
		this.descripe = descripe;
	}
}