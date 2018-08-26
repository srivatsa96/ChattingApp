package com.gc.chatapp.entities;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.ManyToOne;

@Entity
//@DiscriminatorValue("BROADCAST_CHAT")
public class BroadCastChatMessage extends ChatMessage {

	// Instance variables
	@ManyToOne(cascade=CascadeType.MERGE)
	private ChatBroadcast chatBroadcast;

	public BroadCastChatMessage() {

	}

	public ChatBroadcast getChatBroadcast() {
		return chatBroadcast;
	}

	public void setChatBroadcast(ChatBroadcast chatBroadcast) {
		this.chatBroadcast = chatBroadcast;
	}
}