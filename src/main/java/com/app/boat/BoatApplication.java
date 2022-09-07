package com.app.boat;

import java.util.stream.Stream;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.app.boat.model.Boat;
import com.app.boat.model.BoatRepository;

@SpringBootApplication
public class BoatApplication {

	public static void main(String[] args) {
		SpringApplication.run(BoatApplication.class, args);
	}

	@Bean
    CommandLineRunner init(BoatRepository boatRepository) {
        return args -> {
            Stream.of("Laura", "Simona", "Jennifer", "Helen", "Rachel").forEach(name -> {
                Boat boat = new Boat(name, name + " Description");
					boatRepository.save(boat);
            });
            boatRepository.findAll().forEach(System.out::println);
        };
    };
}