import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boat } from '../model/boat';
import { BoatServiceService } from '../service/boat-service.service';

@Component({
  selector: 'app-update-boat',
  templateUrl: './update-boat.component.html',
  styleUrls: ['./update-boat.component.css']
})
export class UpdateBoatComponent implements OnInit {

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

  onSubmit() {
    this.boatService.updateBoat(this.id, this.boat)
      .subscribe(
        res => {
          console.log(res);

          this.boatService.findAll().subscribe(data => {
            this.boats = data;
          });
          this.router.navigate(['/boats']);
        }
      )
  }
}
