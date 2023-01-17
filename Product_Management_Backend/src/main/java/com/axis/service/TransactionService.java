package com.axis.service;

import java.util.List;


import com.axis.model.Transaction;

public interface TransactionService {
	
	Transaction saveTransaction(Transaction transaction);

    List<Transaction> findAllTransactions();

}
