import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent {
  lugar : any = {};

  constructor(private lugaresServices : LugaresService){
  
  }

  guardarLugar() {
    this.lugaresServices.guardarLugar(this.lugar);
  }
}
