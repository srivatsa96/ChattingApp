package com.gc.chatapp.dao;

import java.util.List;
import com.gc.chatapp.entities.User;
import com.gc.chatapp.entities.ChatUser;

public interface UserDao {
	
	void indexDao(User user);
	
	//dipti
	ChatUser getChatUserById(long userId);
	
	//kalash
	void updateUser(User user);
	
	//udbhav
	void updateUserStatus(User user);
	
	
	boolean checkPassword(User user);
	
	//udbhav
	void resetPassword(long userId, String oldPassword, String newPassword);
	
	
	List<ChatUser> retrieveAllChatUsers(ChatUser chatUser);
	
	
	ChatUser addNewChatUser(ChatUser currentChatUser, ChatUser newChatUser);
}