import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'platzisquare';
  
  lat = -12.024911;
  lng = -77.066682;
  lugares = null;
  constructor(private lugaresService: LugaresService) { 
    lugaresService.getLugares()
      .valueChanges().subscribe(lugares => {
        console.log(lugares)
        this.lugares = lugares;
    });
  }
}
