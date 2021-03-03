import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = '';
  hayError: boolean = false;
  paices: Country[] = [];
/* Aqui lo que estamos haciendo es inyectar un servicio, mas especifico (servicio: PaisService) */
  constructor( private paisService: PaisService ) { }

  bucar( termino: string ){

    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais( this.termino )
    .subscribe( (paises) => {
      console.log( paises ); 
      this.paices = paises;
      
    }, (err) => {
      this.hayError = true;
      this.paices = [];
    });
  }

}
