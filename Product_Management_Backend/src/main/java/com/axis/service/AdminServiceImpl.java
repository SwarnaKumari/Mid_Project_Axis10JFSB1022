package com.axis.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.axis.model.Admin;
import com.axis.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminRepository adminRepo;

	@Override
	public String validateAdmin(Admin admin) {
		String msg=" ";
		try {
			Admin adminData=adminRepo.findAdminByEmail(admin.getEmail());
			if(admin.getEmail().equals(adminData.getEmail())&&admin.getPassword().equals(adminData.getPassword())) {
				msg="Valid";
			}
			else {
				return "Invalid";
			}
		}
		catch(Exception ex) {
			msg="Invalid";
		}
		return msg;
	}

	@Override
	public Admin saveAdmin(Admin admin) {
		return adminRepo.save(admin);
	}

}
