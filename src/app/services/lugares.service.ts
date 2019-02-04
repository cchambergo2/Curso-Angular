import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database'

@Injectable()
export class LugaresService{
    lugares: any = [
        {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: false, nombre: 'Donuts' },
        {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.80, active: true, nombre: 'Veterinaria' },
        {id: 3, plan: 'pagado', cercania: 2, distancia: 5, active: false, nombre: 'sushi' },
        {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: true, nombre: 'Floreria' },
        {id: 5, plan: 'gratuito', cercania: 3, distancia: 35, active: true, nombre: 'zapateria' },
      ];
      constructor(private afDB:AngularFireDatabase) {

      }
      public getLugares() {
          return this.afDB.list('lugares/');
      }
      public buscarLugar(id) {
        return this.lugares.filter((lugar) => { return lugar.id == id })[0] || null;
      }
      public guardarLugar(lugar){
        this.afDB.database.ref('lugares/'+lugar.id).set(lugar);
      }
}