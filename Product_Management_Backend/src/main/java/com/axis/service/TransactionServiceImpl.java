package com.axis.service;

import com.axis.model.Transaction;
import com.axis.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service

public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
     
    @Override
    public Transaction saveTransaction(final Transaction transaction){
        return transactionRepository.save(transaction);
    }
    
    @Override
    public List<Transaction> findAllTransactions(){
        return transactionRepository.findAll();
    }
}