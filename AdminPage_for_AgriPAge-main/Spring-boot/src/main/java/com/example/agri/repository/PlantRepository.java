package com.example.agri.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.agri.model.Plant;


@Repository
public interface PlantRepository extends MongoRepository< Plant, String>{

	@Query("{'$or':[ {'title': {$regex : ?0, $options: 'i'}}, {'description': {$regex : ?0, $options: 'i'}}, "
			+ "{'imageUrl': {$regex : ?0, $options: 'i'}}, {'avatarUrl': {$regex : ?0, $options: 'i'}}]}")
	Page<Plant> searchPlant(Pageable pageable, String searchText);
}
