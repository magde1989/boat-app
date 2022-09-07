import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BoatServiceService } from '../service/boat-service.service';

@Component({
  selector: 'app-add-boat',
  templateUrl: './add-boat.component.html',
  styleUrls: ['./add-boat.component.css']
})
export class AddBoatComponent implements OnInit {
  addForm : FormGroup;


  constructor(private formBuilder: FormBuilder, private router: Router, private boatService: BoatServiceService) {
    this.addForm = formBuilder.group({});
  }


  ngOnInit() {
    this.addForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      description: ['', Validators.required]
    });

  }

  addBook(): void {
    this.router.navigate(['add-boat'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };

  onSubmit() {
    this.boatService.addBoat(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['boats']);
      });
  }

}
