package com.axis.controller;

import org.springframework.beans.factory.annotation.Autowired;




import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.axis.model.Product;
import com.axis.model.User;
import com.axis.model.Admin;
import com.axis.service.AdminService;
import com.axis.service.ProductService;
import com.axis.service.TransactionService;
import com.axis.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController


public class AdminController {

	@Autowired
	private ProductService productService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
    private TransactionService transactionService;
	
	@Autowired
	private AdminService adminService;

	@PostMapping("/saveProduct")
	public ResponseEntity<?> saveProduct(@RequestBody Product product) {
		return new ResponseEntity<>(productService.saveProduct(product), HttpStatus.CREATED);
	}

	@GetMapping("/getAllProducts")
	public ResponseEntity<?> getAllProduct() {
		return new ResponseEntity<>(productService.getAllProduct(), HttpStatus.OK);
	}

	@GetMapping("/getProductById/{id}")
	public ResponseEntity<?> getProductById(@PathVariable Integer id) {
		return new ResponseEntity<>(productService.getProductById(id), HttpStatus.OK);
	}

	@GetMapping("/deleteProduct/{id}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer id) {
		return new ResponseEntity<>(productService.deleteProduct(id), HttpStatus.OK);
	}

	@PostMapping("/editProduct/{id}")
	public ResponseEntity<?> editProduct(@RequestBody Product product, @PathVariable Integer id) {
		return new ResponseEntity<>(productService.editProduct(product, id), HttpStatus.CREATED);
	}
	
	@PostMapping("/editUser/{id}")
	public ResponseEntity<?> editUser(@RequestBody User user,@PathVariable Integer id){
		return new ResponseEntity<>(userService.editUser(user, id),HttpStatus.CREATED);
	}
	
	@GetMapping("/deleteUser/{id}")
	public ResponseEntity<?> deleteUser(@PathVariable Integer id) {
		return new ResponseEntity<>(userService.deleteUser(id), HttpStatus.OK);
	}
	
	@GetMapping("/getAllUser")
	public ResponseEntity<?> getAllUser() {
		return new ResponseEntity<>(userService.getAllUser(), HttpStatus.OK);
	}
	
	@GetMapping("/getUserById/{id}")
	public ResponseEntity<?> getUserById(@PathVariable Integer id) {
		return new ResponseEntity<>(userService.getUserById(id), HttpStatus.OK);
	}
	
	@GetMapping("/transaction-all")
    public ResponseEntity<?> findAllTransactions(){
        return new ResponseEntity<>(transactionService.findAllTransactions(), HttpStatus.OK);
    }
	
	@PostMapping("/validateAdmin")
	public ResponseEntity<?> validateAdmin(@RequestBody Admin admin){
		
		return new ResponseEntity<>(adminService.validateAdmin(admin),HttpStatus.CREATED);
		
	}
	
	@PostMapping("/saveAdmin")
	public ResponseEntity<?> saveAdmin(@RequestBody Admin admin){
		return new ResponseEntity<>(adminService.saveAdmin(admin),HttpStatus.CREATED);
		
	}
	
	

}