package com.app.boat.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class Boat {
    
    @Id
    @GeneratedValue
    private long id;
    private String name;
    private String description;

    public Boat(){}
    
    public Boat(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }
}