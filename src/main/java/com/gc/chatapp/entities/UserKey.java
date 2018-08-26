package com.gc.chatapp.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(uniqueConstraints=@UniqueConstraint(columnNames="secretKey"))
public class UserKey {
	// Instance variables

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int userKeyId;
	@OneToOne
	private User user;

	public int getUserKeyId() {
		return userKeyId;
	}

	public void setUserKeyId(int userKeyId) {
		this.userKeyId = userKeyId;
	}
	@Column(length=70)
	private String secretKey;

	

	// Default Constructor
	public UserKey() {
		// TODO Auto-generated constructor stub
	}

	// Parameterized Constructor
	public UserKey(String secretKey, User user) {
		super();
		this.secretKey = secretKey;
		this.user = user;
	}

	// Getter and setter methods
	public String getSecretKey() {
		return secretKey;
	}

	public void setSecretKey(String secretKey) {
		this.secretKey = secretKey;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
}