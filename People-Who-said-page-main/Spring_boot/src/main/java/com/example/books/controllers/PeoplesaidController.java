package com.example.books.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.books.model.Peoplesaid;
import com.example.books.services.PeoplesaidService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/peoplesaid")

public class PeoplesaidController {

	@Autowired
    PeoplesaidService peoplesaidService;
	
	@PostMapping
   public ResponseEntity<Peoplesaid> createPeoplesaid(@RequestBody Peoplesaid peoplesaid){
		return peoplesaidService.createPeoplesaid(peoplesaid);
	}
	
	@GetMapping
   public ResponseEntity<List<Peoplesaid>> getAllPeoplesaid(){
		return peoplesaidService.getAllPeoplesaid();
   }
	
	@GetMapping(params="id") 
	public ResponseEntity<Peoplesaid> getPeoplesaidById(@RequestParam String id) 
	{ return peoplesaidService.getPeoplesaidById(id); } 
	
	@GetMapping("/page")
	public ResponseEntity<Map	<String, Object>> getPeoplesaid(@RequestParam(value="pageNo",defaultValue="0") int pageNo,
			@RequestParam(value="pageSize",defaultValue="2") int pageSize,@RequestParam(name = "sortBy", defaultValue = "id") String sortBy){
		return peoplesaidService.getAllPeoplesaidInPage(pageNo,pageSize,sortBy);
	}
	
//	@GetMapping("/plants/{id}")
//	public ResponseEntity<Plant> getPlantById(@PathVariable String id){
//	    return plantService.getPlantById(id);
//	}
//	
//	@GetMapping(params = "userName")
//	public ResponseEntity<PlantRepository> getUserByUsername(@RequestParam String userName){
//	    return PlantService.getUserByTitle(title);
//	}
	
	@PutMapping("/{id}")
   public ResponseEntity<Peoplesaid> updatePeoplesaid(@PathVariable("id") String id, @RequestBody Peoplesaid peoplesaid) {
       return peoplesaidService.updatePeoplesaid(id, peoplesaid);
   }
	
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deletePeoplesaid(@PathVariable String id) {
	    return peoplesaidService.deletePeoplesaid(id);
	}

	@GetMapping("/search/{search}")
	public ResponseEntity<?> getPlant(@PathVariable String search, @RequestParam(value="pageNo",defaultValue="0") int pageNo,
			@RequestParam(value="pageSize",defaultValue="0") int pageSize,@RequestParam(name = "sortBy", defaultValue = "id") String sortBy){
		return peoplesaidService.getPeoplesaidBySearch(search,pageNo,pageSize,sortBy);
	}
	
}
