package com.gc.chatapp.dao;

import java.util.List;

import com.gc.chatapp.entities.ChatGroup;
import com.gc.chatapp.entities.User;

public interface GroupManagementDao {

	void indexDao(User user);

	long addChatGroup(ChatGroup chatGroup);

	void addUserToGroup(long userId, long groupId);
	
	void removeMemberFromAChatGroup(long chatGroupId, long chatUserIdToBeRemoved);
	
	void removeChatGroup(long groupId);
	
	ChatGroup getChatGroupById(long chatGroupId);
	
	List<ChatGroup> getAllChatGroupsOfAChatUser(long chatUserId);

}
