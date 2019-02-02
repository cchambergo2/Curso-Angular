import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'platzisquare';
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Donuts' },
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.80, active: true, nombre: 'Veterinaria' },
    {id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: false, nombre: 'sushi' },
    {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre: 'Floreria' },
    {id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre: 'zapateria' },
  ];
  lat = -12.024911;
  lng = -77.066682;
  constructor() { }
}
