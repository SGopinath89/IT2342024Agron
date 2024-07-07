package com.example.books.services;

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


import com.example.books.model.Peoplesaid;
import com.example.books.repository.PeoplesaidRepository;


@Service
public class PeoplesaidService {
	
	@Autowired
	PeoplesaidRepository peoplesaidRepository;
	
   
	public ResponseEntity<Peoplesaid> createPeoplesaid ( Peoplesaid peoplesaid) {
		try {
			Peoplesaid ff=peoplesaidRepository.save(peoplesaid);
		       return new ResponseEntity<>(ff, HttpStatus.CREATED);
		       } catch (Exception e) {
		    	   return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		    	   }
	}
	
	public ResponseEntity<List<Peoplesaid>> getAllPeoplesaid() {
		try {

		List<Peoplesaid>peoplesaid= new ArrayList<>();
	  peoplesaidRepository.findAll().forEach(peoplesaid::add);
	  
		if (peoplesaid.isEmpty()) { 
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}
		else { return new ResponseEntity<>(peoplesaid,HttpStatus.OK);
			
		}

		}catch (Exception e) { 
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public ResponseEntity<Map<String, Object>> getAllPeoplesaidInPage(int pageNo, int pageSize, String sortBy) {
		try {
			Map<String, Object> response = new HashMap<>();
		    Sort sort = Sort.by(sortBy);
			Pageable pageable = PageRequest.of(pageNo, pageSize, sort);
		    Page<Peoplesaid> page = peoplesaidRepository.findAll(pageable);
		    response.put("data", page.getContent());
		    response.put("Total no of pages", page.getTotalPages());
		    response.put("Total no of elements", page.getTotalElements());
		    response.put("Current page no", page.getNumber());

		    return new ResponseEntity<>(response, HttpStatus.OK);
		} catch (Exception e) {
		    return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public ResponseEntity<Peoplesaid> getPeoplesaidById(String id)
	 { Optional<Peoplesaid> ff = peoplesaidRepository.findById(id); 
	if (ff.isPresent())
	 { return new ResponseEntity<>(ff.get(), HttpStatus.OK);
	 } 
	else 
	 { return new ResponseEntity<>(HttpStatus.NOT_FOUND); } 
	 } 
	
	public ResponseEntity<Peoplesaid>updatePeoplesaid
	(@PathVariable  String id,@RequestBody Peoplesaid peoplesaid){
		Optional<Peoplesaid> p=peoplesaidRepository.findById(id);
		if(p.isPresent()) {
			Peoplesaid _peoplesaid=p.get();
			_peoplesaid.setCompanyname(peoplesaid.getCompanyname());
			_peoplesaid.setDescription(peoplesaid.getDescription());
			_peoplesaid.setStatus(peoplesaid.getStatus());
			_peoplesaid.setPeopleimg(peoplesaid.getPeopleimg());
			_peoplesaid.setPeoplename(peoplesaid.getPeoplename());
			_peoplesaid.setPlace(peoplesaid.getPlace());
			
			Peoplesaid updatedPeoplesaid=peoplesaidRepository.save(_peoplesaid);
			return new ResponseEntity<>(updatedPeoplesaid,HttpStatus.OK);
		}
		else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	public ResponseEntity<HttpStatus> deletePeoplesaid(@PathVariable String id){
		try {
			Optional<Peoplesaid> p=peoplesaidRepository.findById(id);
			if(p.isPresent()) {
				peoplesaidRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			}
			else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	public ResponseEntity<Page<Peoplesaid>> getPeoplesaidBySearch(String searchText, int pageNo, int pageSize, String sortBy) {
	    try {
//	      

	    	Pageable pageable = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
	    	Page<Peoplesaid> peoplesaidPages = peoplesaidRepository.searchPeoplesaid(pageable, ".*" + searchText + ".*");
	    if (peoplesaidPages.isEmpty()) {
	             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	        return new ResponseEntity<>(peoplesaidPages, HttpStatus.OK);
	    } catch (Exception e) {
	        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}



}
