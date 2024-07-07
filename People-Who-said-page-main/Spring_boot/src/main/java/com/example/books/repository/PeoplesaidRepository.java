package com.example.books.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.books.model.Peoplesaid;

@Repository
public interface PeoplesaidRepository extends MongoRepository< Peoplesaid, String>{
	
	@Query("{'$or':[ {'companyname': {$regex : ?0, $options: 'i'}}, {'peoplename': {$regex : ?0, $options: 'i'}}, "
			+ "{'peopleimg': {$regex : ?0, $options: 'i'}}, {'status': {$regex : ?0, $options: 'i'}}]}")
	Page<Peoplesaid> searchPeoplesaid(Pageable pageable, String searchText);

}
