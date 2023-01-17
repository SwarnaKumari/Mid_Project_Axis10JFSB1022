package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer>  {

	Admin findAdminByEmail(String email);
}
