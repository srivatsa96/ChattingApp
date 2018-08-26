package com.gc.chatapp.dao.jpa;

import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.TypedQuery;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Repository;

import com.gc.chatapp.dao.GroupManagementDao;
import com.gc.chatapp.entities.ChatGroup;
import com.gc.chatapp.entities.ChatUser;
import com.gc.chatapp.entities.User;
import com.gc.chatapp.services.UserService;

@Repository
public class GroupManagementDaoImpl implements GroupManagementDao {

	@Autowired
	EntityManagerFactory entityManagerFactory;

	@Autowired
	private EntityManagerFactory factory;

	@Autowired
	private UserService userservice;

	@Override
	public void indexDao(User user) {

		EntityManager entityManager = entityManagerFactory
				.createEntityManager();
		EntityTransaction tx = entityManager.getTransaction();
		tx.begin();
		entityManager.persist(user);
		tx.commit();
		entityManager.close();

	}

	@Override
	public long addChatGroup(ChatGroup chatGroup) {
		System.out.println("reached");
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		em.persist(chatGroup);
		em.getTransaction().commit();
		em.close();

		return chatGroup.getChatGroupId();
	}

	@Override
	public void addUserToGroup(long userId, long chatGroupId) {

		EntityManager em = factory.createEntityManager();
		ChatUser userToAdd = userservice.getChatUserById(userId);
		em.getTransaction().begin();
		Set<ChatUser> chatUsers = em.find(ChatGroup.class, chatGroupId).getChatGroupMembers();
		chatUsers.add(userToAdd);
		em.getTransaction().commit();

	}

	@Override
	public void removeMemberFromAChatGroup(long chatGroupId,long chatUserIdToBeRemoved) {
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		// Change Table Name to Mapping Table and check column names
				/*
				 * String jpql =
				 * "DELETE FROM chatGroup b WHERE b.chatGroupId = :	groupId & b.chatUserId =: userId"
				 * ; TypedQuery<ChatGroup> query = em.createQuery(jpql,
				 * ChatGroup.class); query.executeUpdate();
				 */
			System.out.println("deleting "+ chatGroupId + " " + chatUserIdToBeRemoved);
				Set<ChatUser> chatUsers = em.find(ChatGroup.class, chatGroupId)
						.getChatGroupMembers();
				ChatUser userToRemove = em.find(ChatUser.class, chatUserIdToBeRemoved);
				chatUsers.remove(userToRemove);
				em.getTransaction().commit();
				em.close();

	}

	@Override
	public void removeChatGroup(long chatGroupId) {
		EntityManager em = factory.createEntityManager();
		ChatGroup groupObj =em.find(ChatGroup.class, chatGroupId);
		em.getTransaction().begin();
		em.remove(groupObj);
		em.getTransaction().commit();
		em.close();

	}

	@Override
	public ChatGroup getChatGroupById(long chatGroupId) {
		EntityManager em = factory.createEntityManager();
		em.getTransaction().begin();
		String jpql = "from ChatGroup b where b.chatGroupId=:groupId";
		TypedQuery<ChatGroup> query = em.createQuery(jpql,
				ChatGroup.class);
		query.setParameter("groupId", chatGroupId);
		ChatGroup chatGroup= query.getSingleResult();
		em.getTransaction().commit();
		em.close();

		return chatGroup;
	}

	@Override
	public List<ChatGroup> getAllChatGroupsOfAChatUser(long chatUserId) {
		EntityManager em = factory.createEntityManager();
		String jpql = "from ChatGroup cb where cb.chatGroupCreator.userId=:userId";
		TypedQuery<ChatGroup> query = em.createQuery(jpql, ChatGroup.class);
		query.setParameter("userId", chatUserId);
		List<ChatGroup> groups= query.getResultList();
		return groups;
	}

}
