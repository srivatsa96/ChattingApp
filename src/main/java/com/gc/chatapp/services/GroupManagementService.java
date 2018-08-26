package com.gc.chatapp.services;

import java.util.List;


import com.gc.chatapp.entities.ChatGroup;

public interface GroupManagementService {

	long createGroup(ChatGroup chatGroup);

	void addUserToGroup(long userId, long groupId) ;

	void removeUserFromGroup(long userId, long groupId);

	void editGroupName(String name, long groupId);

	void deleteGroupById(long groupId);

	List<ChatGroup> getListOfGroups(long userId);

	ChatGroup getGroupById(long groupId);
	
	List<ChatGroup> getListOfGroupManagement(long userId);

}
