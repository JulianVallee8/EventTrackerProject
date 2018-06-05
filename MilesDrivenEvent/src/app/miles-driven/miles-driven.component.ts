import { MilesDrivenService } from './../miles-driven.service';
import { Component, OnInit } from '@angular/core';
import { Miles } from '../models/miles';
import { CompileMetadataResolver } from '@angular/compiler';


@Component({
  selector: 'app-miles-driven',
  templateUrl: './miles-driven.component.html',
  styleUrls: ['./miles-driven.component.css']
})
export class MilesDrivenComponent implements OnInit {

  miles: Miles[] = [];
  newMile = new Miles();
  editMileage = null;

  selected =  null;

  newMileage () {
    this.milesDrivenService.create(this.newMile).subscribe(
      data => {
        this.reload();
        this.newMile = new Miles();
      },
      err => console.log(err)
    );
  }

  updateMileage(newMile) {
    this.milesDrivenService.update(newMile).subscribe(
      data => {
        this.reload();
        this.selected = null;
        this.editMileage = null;
      },
      err => console.log(err)
    );

  }

  deleteMileage(id) {
    this.milesDrivenService.destroy(id).subscribe(
      data => this.reload(),
      err => console.log(err)
    );
  }

  hideEditView() {
    this.editMileage = null;
 }

  setEditMiles() {
    this.editMileage = Object.assign({}, this.selected);
  }

  getNumOfMiles = function() {
    return this.miles.length;
  };
  displayMiles = function(mile) {
    this.selected = mile;
   };
   displayTable = function() {
   this.selected = null;
   this.editMileage = null;
   };



  reload() {
    this.milesDrivenService.index().subscribe(
      data => this.miles = data,
      err => console.log(err)
    );
    }
  constructor(private milesDrivenService: MilesDrivenService) { }

  ngOnInit() {
    this.reload();
  }

}
