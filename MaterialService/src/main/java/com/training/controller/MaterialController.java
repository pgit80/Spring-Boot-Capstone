package com.training.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.training.business.bean.MaterialCategoryBean;
import com.training.service.MaterialService;

@RestController
public class MaterialController {
	
	@Autowired
	private MaterialService materialService;

    @GetMapping("/")
    public String home() {
        return "Material Service deployed successfully";
    }

    @GetMapping("/health")
    public String health() {
        return "Material Service is UP";
    }
    
    @GetMapping("/controller/getMaterialCategories")
    public ResponseEntity<List<MaterialCategoryBean>> getMaterialCategories() {
    	return new ResponseEntity<List<MaterialCategoryBean>>(materialService.getMaterialCategories(), HttpStatus.OK);
    }
    
    @GetMapping("/controller/getMaterialCategoryById/{categoryId}")
    public ResponseEntity<MaterialCategoryBean> getMaterialCategoryById(@PathVariable String categoryId){
    	return new ResponseEntity<MaterialCategoryBean>(materialService.getMaterialCategoryById(categoryId), HttpStatus.OK);
    }
}