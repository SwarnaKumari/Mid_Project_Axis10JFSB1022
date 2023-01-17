package com.axis.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.axis.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long>{

}
