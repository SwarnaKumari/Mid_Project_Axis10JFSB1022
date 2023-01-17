package com.axis.service;

import java.util.List;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.User;
import com.axis.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepo;

	@Override
	public User saveUser(User user) {
		
		return userRepo.save(user);
	}

	@Override
	public List<User> getAllUser() {
		
		return userRepo.findAll();
	}

	@Override
	public User getUserById(Integer id) {
		
		return userRepo.findById(id).get();
	}

	@Override
	public String deleteUser(Integer id) {
		
		User user=userRepo.findById(id).get();
		if(user!=null)
		{
			userRepo.delete(user);
			return "User Deleted Successfully";
		}
		return "Something wrong on server";
	}

	@Override
	public User editUser(User u, Integer id) {
		
		User oldUser=userRepo.findById(id).get();
		oldUser.setEmail(u.getEmail());
		oldUser.setPassword(u.getPassword());
		
		return userRepo.save(oldUser);
	}

	@Override
	public String validateUser(User user) {
		String msg=" ";
		try {
		User userData=userRepo.findUserByEmail(user.getEmail());
		if(user.getEmail().equals(userData.getEmail())&&user.getPassword().equals(userData.getPassword())) {
			msg="Valid";
		}else {
		return "invalid";
		}
		}
		catch(Exception ex) {
			msg="Invalid";
		}
		return msg;
	}
	

}
