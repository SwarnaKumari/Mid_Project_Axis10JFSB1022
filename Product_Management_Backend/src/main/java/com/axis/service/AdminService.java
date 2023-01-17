package com.axis.service;

import com.axis.model.Admin;

public interface AdminService {
	
	public Admin saveAdmin(Admin admin);
	public String validateAdmin(Admin admin);

}
