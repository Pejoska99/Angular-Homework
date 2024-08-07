import { Component, Input } from '@angular/core';
import { Car } from '../../types/cars.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-car.component.html',
  styleUrl: './single-car.component.css'
})
export class SingleCarComponent {
  @Input() car!: Car;

  showDetails: boolean = false;

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
