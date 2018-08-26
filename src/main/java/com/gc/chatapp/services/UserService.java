package com.gc.chatapp.services;

import java.util.Date;
import java.util.List;

import com.gc.chatapp.entities.ChatUser;
import com.gc.chatapp.entities.User;

public interface UserService {
	//amans team
	boolean createUser(String userName, String email, 
		long mobileNo, String password, Date dob, String gender, byte[] profile_pic);

	// Manjunath
	boolean isUserValid(String emaild);

	// Manjunath
	ChatUser loginUser(String emailId, String password);

	// Anshul
	boolean updatePassword(String emailId, String password);

	// Anshul
	void sendMailToResetPassword(String emailId);

	// Dipti
	ChatUser getChatUserById(long userId);

	// Kalash
	boolean updateUser(User user);

	//Udbhav
	//Used for deactivating account
	boolean updateUserStatus(User user); // Service

	//Udbhav
	boolean resetPassword(long userId, String oldPassword, String newPassword);

	// 
	List<ChatUser> getAllChatUsers(ChatUser chatUser); // individualContacts

	// 
	boolean addNewChatUser(ChatUser currentChatUser, ChatUser chatUserToBeAdded);


}
