package com.gc.chatapp.services;

import java.util.List;

import com.gc.chatapp.entities.BroadCastChatMessage;
import com.gc.chatapp.entities.ChatGroup;
import com.gc.chatapp.entities.ChatUser;
import com.gc.chatapp.entities.GroupChatMessage;
import com.gc.chatapp.entities.IndividualChatMessage;

public interface ChatMessageService {
	// 
	boolean addIndividualMessage(IndividualChatMessage individualChatMessage); // Vrushank

	// 
	boolean addGroupMessage(GroupChatMessage groupChatMessage); // TBD

	// 
	boolean addBroadCastMessage(BroadCastChatMessage broadCastMessage); // TBD

	// When the user logs in for the first time in Individual Chat window, load history
	List<IndividualChatMessage> getAllIndividualMessagesOfAChatUser(ChatUser chatUser);

	// 
	boolean removeIndividualMessage(IndividualChatMessage individualMessage); 

	// Mitesh
	boolean addChatGroup(ChatGroup chatGroup) ;

	// Rahul
	boolean removeMemberFromAChatGroup(long chatGroupId, long chatUserIdToBeRemoved);

	// Abhishek
	boolean removeChatGroup(long groupId); 

	// Mitesh
	ChatGroup getChatGroupById(long chatGroupId);

	// Rahul
	List<ChatGroup> getAllChatGroupsOfAChatUser(long chatUserId);
}
