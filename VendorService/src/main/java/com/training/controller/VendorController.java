package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.business.bean.VendorBean;
import com.training.service.VendorService;
import com.training.service.VendorServiceImpl;

@RestController
public class VendorController {
	
	@Autowired
	private VendorService service;

    @GetMapping("/")
    public String index() {
        return "Welcome to Spring Boot Vendor Service API!";
    }
    
    @GetMapping("/controller/getVendors")
    public ResponseEntity<List<VendorBean>> getVendorDetails(){
    	return new ResponseEntity<List<VendorBean>>(service.getVendorDetails(), HttpStatus.OK);
    }
    
}