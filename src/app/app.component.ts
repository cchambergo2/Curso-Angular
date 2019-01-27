import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'platzisquare';
  lugares: any = [
    { active: true, nombre: 'Floreria' },
    { active: true, nombre: 'Donuts' },
    { active: true, nombre: 'Veterinaria' },
    { active: true, nombre: 'sushi' },
    { active: true, nombre: 'zapateria' },
  ];
  lat:number = -12.024911;
  lng:number =  -77.066682;
  constructor() { }


}
