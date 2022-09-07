import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Boat } from '../model/boat';
import { BoatServiceService } from '../service/boat-service.service';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
  styleUrls: ['./boat-list.component.css']
})
export class BoatListComponent implements OnInit {

  boats: Boat[];

  constructor(private boatService: BoatServiceService, private router: Router) {
    this.boats = [];
  }

  ngOnInit(): void {
    this.boatService.findAll().subscribe(data => {
      this.boats = data;
    });
  }

  deleteBoat(id: number) { 
    this.boatService.deleteBoat(id).subscribe(
      res => {
        console.log(res);
      }
    ); 
    
    this.boatService.findAll().subscribe(data => {
      this.boats = data;
    });
    this.router.navigate(['boats']); 
  }

}
