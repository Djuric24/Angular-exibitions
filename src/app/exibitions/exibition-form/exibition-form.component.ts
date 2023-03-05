import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Exibition } from 'src/app/model/exibition.model';
import { MuseumLocation } from 'src/app/model/location.model';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-exibition-form',
  templateUrl: './exibition-form.component.html',
  styleUrls: ['./exibition-form.component.css'],
})
export class ExibitionFormComponent implements OnInit {
  constructor(private service: ExibitionService) {}
  locations: any;
  location: MuseumLocation = new MuseumLocation();
  forma: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });
  ngOnInit(): void {
    this.getLocations();
  }
  getLocations() {
    this.service.getLocations().subscribe((res) => {
      this.locations = res;
    });
  }
  addExibition() {
    // let exibition = new Exibition(this.forma.value);
    this.service
      .addExibition(this.forma.value, this.location)
      .subscribe((res) => console.log(res));
  }
  setLocation(item: any) {
    for (let location of this.locations) {
      if (location._id == item.target.value) this.location = location;
    }
  }
}
