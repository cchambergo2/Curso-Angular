import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzisquare';
  lugares: any = [
    {cercania: 1, distancia: 1, active: false, nombre: 'Donuts' },
    {cercania: 1, distancia: 1.80, active: true, nombre: 'Veterinaria' },
    {cercania: 2, distancia: 5, active: false, nombre: 'sushi' },
    {cercania: 3, distancia: 10, active: true, nombre: 'Floreria' },
    {cercania: 3, distancia: 35, active: true, nombre: 'zapateria' },
  ];
  lat:number = -12.024911;
  lng:number =  -77.066682;
  constructor() { }


}
