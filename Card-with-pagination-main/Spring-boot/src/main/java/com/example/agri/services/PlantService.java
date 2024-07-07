package com.example.agri.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.agri.model.Plant;
import com.example.agri.repository.PlantRepository;




@Service
public class PlantService {
	
	@Autowired
	PlantRepository plantRepository;
	
   
	public ResponseEntity<Plant> createPlant ( Plant plant) {
		try {
			Plant ff=plantRepository.save(plant);
		       return new ResponseEntity<>(ff, HttpStatus.CREATED);
		       } catch (Exception e) {
		    	   return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		    	   }
		 }
	
	
public ResponseEntity<List<Plant>> getAllPlants() {
	try {

	List<Plant>plants= new ArrayList<>();
  plantRepository.findAll().forEach(plants::add);
  
	if (plants.isEmpty()) { 
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	else { return new ResponseEntity<>(plants,HttpStatus.OK);
		
	}

	}catch (Exception e) { 
		return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}

public ResponseEntity<Map<String, Object>> getAllPlantsInPage(int pageNo, int pageSize, String sortBy) {
	try {
		Map<String, Object> response = new HashMap<>();
	    Sort sort = Sort.by(sortBy);
		Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
	    Page<Plant> page = plantRepository.findAll(pageable);
	    response.put("data", page.getContent());
	    response.put("Total no of pages", page.getTotalPages());
	    response.put("Total no of elements", page.getTotalElements());
	    response.put("Current page no", page.getNumber());

	    return new ResponseEntity<>(response, HttpStatus.OK);
	} catch (Exception e) {
	    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}


public ResponseEntity<Plant> getPlantById(String id)
 { Optional<Plant> ff = plantRepository.findById(id); 
if (ff.isPresent())
 { return new ResponseEntity<>(ff.get(), HttpStatus.OK);
 } 
else 
 { return new ResponseEntity<>(HttpStatus.NOT_FOUND); } 
 } 
//public ResponseEntity<Plant> getPlantById(String id) {
//	Optional<Plant>plant=plantRepository.findById(id);
//	
//	if (plant.isPresent()) {
//		return new ResponseEntity<>(plant.get(),HttpStatus.OK);
//	}
//	else {
//		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//		
//	}
//  }
public ResponseEntity<Plant>updatePlant
(@PathVariable  String id,@RequestBody Plant plant){
	Optional<Plant> p=plantRepository.findById(id);
	if(p.isPresent()) {
		Plant _plant=p.get();
		_plant.setTitle(plant.getTitle());
		_plant.setDescription(plant.getDescription());
		_plant.setAvatarUrl(plant.getAvatarUrl());
		_plant.setImageUrl(plant.getImageUrl());
		_plant.setDescripe(plant.getDescripe());
		
		Plant updatedPlant=plantRepository.save(_plant);
		return new ResponseEntity<>(updatedPlant,HttpStatus.OK);
	}
	else {
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}
public ResponseEntity<HttpStatus> deletePlant(@PathVariable String id){
	try {
		Optional<Plant> p=plantRepository.findById(id);
		if(p.isPresent()) {
			plantRepository.deleteById(id);
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}catch (Exception e) {
		return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
//public ResponseEntity<HttpStatus> deleteAllPlants(){
//	try {
//		plantsRepository.deleteAll();
//		return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
//		}
//}

public ResponseEntity<Page<Plant>> getPlantBySearch(String searchText, int pageNo, int pageSize, String sortBy) {
    try {
//      

    	Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
    	Page<Plant> plantPages = plantRepository.searchPlant(pageable, ".*" + searchText + ".*");
    if (plantPages.isEmpty()) {
             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
        return new ResponseEntity<>(plantPages, HttpStatus.OK);
    } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

}
