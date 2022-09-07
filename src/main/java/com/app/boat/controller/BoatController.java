package com.app.boat.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.boat.model.Boat;
import com.app.boat.model.BoatRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class BoatController {    

    private final BoatRepository boatRepository;

	public BoatController(BoatRepository boatRepository){
		this.boatRepository = boatRepository;
	}

    @GetMapping("/boats")
    public List<Boat> getBoats() {
        return (List<Boat>) boatRepository.findAll();
    }
}