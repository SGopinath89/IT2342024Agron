package com.example.agri.controllers;


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

import com.example.agri.model.Plant;
import com.example.agri.services.PlantService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/plants")
public class PlantController {

	@Autowired
     PlantService plantService;
	
	@PostMapping
    public ResponseEntity<Plant> createPlant(@RequestBody Plant plant){
		return plantService.createPlant(plant);
	}
	
	@GetMapping
    public ResponseEntity<List<Plant>> getAllPlants(){
		return plantService.getAllPlants();
    }
	
	@GetMapping(params="id") 
	public ResponseEntity<Plant> getPlantById(@RequestParam String id) 
	{ return plantService.getPlantById(id); } 
	
	@GetMapping("/page")
	public ResponseEntity<Map	<String, Object>> getPlant(@RequestParam(value="pageNo",defaultValue="0") int pageNo,
			@RequestParam(value="pageSize",defaultValue="2") int pageSize,@RequestParam(name = "sortBy", defaultValue = "id") String sortBy){
		return plantService.getAllPlantsInPage(pageNo,pageSize,sortBy);
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
    public ResponseEntity<Plant> updatePlant(@PathVariable("id") String id, @RequestBody Plant plant) {
        return plantService.updatePlant(id, plant);
    }
	
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpStatus> deletePlant(@PathVariable String id) {
	    return plantService.deletePlant(id);
	}

	@GetMapping("/search/{search}")
	public ResponseEntity<?> getPlant(@PathVariable String search, @RequestParam(value="pageNo",defaultValue="0") int pageNo,
			@RequestParam(value="pageSize",defaultValue="0") int pageSize,@RequestParam(name = "sortBy", defaultValue = "id") String sortBy){
		return plantService.getPlantBySearch(search,pageNo,pageSize,sortBy);
	}
}
	
	
	

