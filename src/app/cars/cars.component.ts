import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/services/cars.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[];
  constructor(private carsService: CarsService) { 
    this.cars = carsService.getParticipants();
  }

  ngOnInit(): void {
  }

}
