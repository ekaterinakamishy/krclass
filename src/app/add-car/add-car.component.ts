import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarsService } from 'src/services/cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  carGroup: FormGroup;
  constructor(private carsService: CarsService) { 
    this.carGroup = new FormGroup({
      brandName: new FormControl('', [Validators.required]),
      modelName: new FormControl('', [Validators.required]),
      priceInRub: new FormControl(0, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  create(){
    this.carsService.addParticipant(
      this.carGroup.controls['brandName'].value,
      this.carGroup.controls['modelName'].value,
      this.carGroup.controls['priceInRub'].value,
    );
  }
}
