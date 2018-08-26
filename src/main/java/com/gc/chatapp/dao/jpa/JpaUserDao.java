package com.gc.chatapp.dao.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;

//chatmangement
import org.springframework.stereotype.Repository;



import com.gc.chatapp.dao.UserDao;
import com.gc.chatapp.entities.ChatUser;
import com.gc.chatapp.entities.User;



@Repository
public class JpaUserDao implements UserDao {

	private EntityManagerFactory entityManagerFactory;
	
	@Override
	public void indexDao(User user) {
		EntityManager entityManager=entityManagerFactory.createEntityManager();
		EntityTransaction tx = entityManager.getTransaction();
		tx.begin();
		entityManager.persist(user);
		tx.commit();
		entityManager.close();
	}

	@Override
	public ChatUser getChatUserById(long userId) {
		EntityManager entityManager = entityManagerFactory.createEntityManager();
        ChatUser user = entityManager.find(ChatUser.class, userId);
        return user;
	}

	@Override
	public void updateUser(User user) {
		EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        entityManager.merge(user);
        entityManager.getTransaction().commit();
        entityManager.close();
        
       
        
	}

	@Override
	public void updateUserStatus(User user) {
		EntityManager entityManager = entityManagerFactory.createEntityManager();
        entityManager.getTransaction().begin();
        entityManager.merge(user);
        entityManager.getTransaction().commit();
        entityManager.close();
        
	}
	
	@Override
	public boolean checkPassword(User user) {
		// TODO Auto-generated method stub
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		User u = entityManager.find(User.class, user.getEmailId());
		return user.getPassword()==u.getPassword();
	}
	
	@Override
	public void resetPassword(long userId, String oldPassword, String newPassword) {
		
		
		
	}

	@Override
	public List<ChatUser> retrieveAllChatUsers(ChatUser chatUser) {
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		String querystr = "select chatuser from ChatUser chatuser";
		Query query = entityManager.createQuery(querystr, ChatUser.class);
		List<ChatUser> retrievedChatUsers = query.getResultList();
		entityManager.close();
		return retrievedChatUsers;
	}

	@Override
	public ChatUser addNewChatUser(ChatUser currentChatUser, ChatUser newChatUser) {
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		String querystr = "select chatuser from ChatUser chatuser";
		Query query = entityManager.createQuery(querystr, ChatUser.class);
        entityManager.getTransaction().begin();
        //entityManager.merge();
        entityManager.getTransaction().commit();
        entityManager.close();
		return null;
	}
}