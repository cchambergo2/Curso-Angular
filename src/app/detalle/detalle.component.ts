import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares: any = [
    { id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Donuts', description: 'mas adelnate tendremos mas informacion' },
    { id: 2, plan: 'gratuito', cercania: 1, distancia: 1.80, active: true, nombre: 'Veterinaria', description: 'mas adelnate tendremos mas informacion' },
    { id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: false, nombre: 'sushi', description: 'mas adelnate tendremos mas informacion' },
    { id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre: 'Floreria', description: 'mas adelnate tendremos mas informacion' },
    { id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre: 'zapateria', description: 'mas adelnate tendremos mas informacion' },
  ];
  id = null;
  lugar: any = {};
  constructor(private router: ActivatedRoute) {
    console.log(this.router.snapshot.queryParams['action2']);
    console.log(this.router.snapshot.queryParams['referer']);
    this.id = this.router.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }
  buscarLugar() {
    return this.lugares.filter((lugar) => { return lugar.id == this.id })[0] || null;
  }
}
