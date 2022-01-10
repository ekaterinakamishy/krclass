import { Injectable } from '@angular/core';
import { Car } from 'src/app/models/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  cars: Car[];
  constructor() {
    this.cars = [
      {
        id: 0,
        brandName: 'something',
        modelName: 'idk',
        priceInRub: 5,
      },
      {
        id: 0,
        brandName: 'something',
        modelName: 'idk',
        priceInRub: 5,
      },
      {
        id: 0,
        brandName: 'something',
        modelName: 'idk',
        priceInRub: 5,
      },
    ];
  }

  getParticipants() {
    return this.cars;
  }

  addParticipant(
    brandName: string,
    modelName: string,
    priceInRub: number,
  ) {
    let lastParticipant = this.cars[this.cars.length - 1];
    let newId = lastParticipant.id + 1;

    this.cars.push({
      id: newId,
      brandName: brandName,
      modelName: modelName,
      priceInRub: priceInRub,
    });
  }

  getParticipant(index: number) {
    return this.cars[index]; 
  }
}