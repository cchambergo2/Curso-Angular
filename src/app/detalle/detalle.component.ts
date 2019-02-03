import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  id = null;
  lugar: any = {};
  constructor(private router: ActivatedRoute, private lugaresService : LugaresService) {
    console.log(this.router.snapshot.queryParams['action2']);
    console.log(this.router.snapshot.queryParams['referer']);
    this.id = this.router.snapshot.params['id'];
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }
}
