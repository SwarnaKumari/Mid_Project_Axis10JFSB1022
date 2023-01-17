package com.axis.service;

import java.util.List;


import com.axis.model.User;


public interface UserService {
	
	public User saveUser(User user);
	
	public List<User> getAllUser();
	
	public User getUserById(Integer id);
	
	public String deleteUser(Integer id);
	
	public User editUser(User user,Integer id);
	
	public String validateUser(User user);

}
