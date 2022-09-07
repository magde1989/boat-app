import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boat } from '../model/boat';
import { BoatServiceService } from '../service/boat-service.service';

@Component({
  selector: 'app-boat-detail',
  templateUrl: './boat-detail.component.html',
  styleUrls: ['./boat-detail.component.css']
})
export class BoatDetailComponent implements OnInit {

  id: number;
  boat: Boat;
  boats: Boat[];

  constructor(private route: ActivatedRoute, private router: Router,
    private boatService: BoatServiceService) {
    this.id = 0;
    this.boat = new Boat();
    this.boats = [];
  }

  ngOnInit() {
    this.boat = new Boat();
    this.id = this.route.snapshot.params['id'];
    this.boatService.getBoatById(this.id)
      .subscribe(data => {
        this.boat = data;
      }, error => console.log(error));
  }

  backToList() {
    this.router.navigate(['/boats']);
  }
}
