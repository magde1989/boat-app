package com.app.boat.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/boat/{id}")
    public Boat getBoat(@PathVariable("id") Long id) {
        return boatRepository.findById(id).get();
    }

    @PostMapping("/boats")
    public HttpStatus addBoat(@RequestBody Boat boat){
        boatRepository.save(boat);

        return HttpStatus.CREATED;
    }

    @DeleteMapping("/boats/{id}")
    public HttpStatus deleteBoat(@PathVariable("id") Long id) {
        boatRepository.deleteById(id);
        return HttpStatus.OK;
    }
}