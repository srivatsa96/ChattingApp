package com.gc.chatapp.services.impl;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.gc.chatapp.dao.GroupManagementDao;
import com.gc.chatapp.entities.ChatGroup;
//import com.gc.chatapp.exceptions.UserNotFound;
import com.gc.chatapp.services.GroupManagementService;

@Service
public class GroupManagementServiceImpl implements GroupManagementService {

	@Autowired
	private GroupManagementDao groupDao;
	
	@Override
	public long createGroup(ChatGroup chatGroup) {
		// TODO Auto-generated method stub
		long id = groupDao.addChatGroup(chatGroup);
		return id;
	}
	
	@Override
	public void addUserToGroup(long userId, long groupId) {
		// TODO Auto-generated method stub
		groupDao.addUserToGroup(userId, groupId);

	}
	

	@Override
	public void removeUserFromGroup(long userId, long groupId) {
		// TODO Auto-generated method stub
		groupDao.removeMemberFromAChatGroup(groupId, userId);

	}


	@Override
	public void editGroupName(String name, long groupId) {
		// TODO Auto-generated method stub
		//groupDao.editGroupName(name, groupId);
	}
	
	@Override
	public void deleteGroupById(long groupId) {
		// TODO Auto-generated method stub
		groupDao.removeChatGroup(groupId);
	}

	@Override
	public List<ChatGroup> getListOfGroups(long userId) {
		// TODO Auto-generated method stub
		return groupDao.getAllChatGroupsOfAChatUser(userId);
	}
	
	@Override
	public ChatGroup getGroupById(long groupId) {
		// TODO Auto-generated method stub
		return groupDao.getChatGroupById(groupId);
		
	}


	@Override
	public List<ChatGroup> getListOfGroupManagement(long userId) {
		// TODO Auto-generated method stub
		List<ChatGroup> groups = groupDao.getAllChatGroupsOfAChatUser(userId);
//		for (ChatGroup chatGroup : groups) {
////			chatGroup.setChatBroadcaseCreator(null);
////			chatGroup.setChatBroadcastMembers(null);
////			chatGroup.setCreatedDate(null);
//		}
		return groups;
	}

}
