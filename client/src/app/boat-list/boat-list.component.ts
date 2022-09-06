import { Component, OnInit } from '@angular/core';
import { Boat } from '../model/boat';
import { BoatServiceService } from '../service/boat-service.service';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})
export class BoatListComponent implements OnInit {

  boats: Boat[];

  constructor(private boatService: BoatServiceService) {
    this.boats = [];
  }

  ngOnInit(): void {
    this.boatService.findAll().subscribe(data => {
      this.boats = data;
    });
  }
}
