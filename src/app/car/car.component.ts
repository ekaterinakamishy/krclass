import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from 'src/services/cars.service';
import { Car } from '../models/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  car: Car;
  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {
    let id: number = route.snapshot.params['id'];
    this.car = carsService.getParticipant(id);
   }

  ngOnInit(): void {
  }

}