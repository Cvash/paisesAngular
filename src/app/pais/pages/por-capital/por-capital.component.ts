import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  
  termino: string   = '';
  hayError: boolean = false;
  paices: Country[] = [];
/* Aqui lo que estamos haciendo es inyectar un servicio, mas especifico (servicio: PaisService) */
  constructor( private paisService: PaisService ) { }

  bucar( termino: string ){

    this.hayError = false;
    this.termino  = termino;

    this.paisService.buscarCapital( this.termino )
    .subscribe( (paices) => {
      this.paices = paices;
      
    }, (err) => {
      this.hayError = true;
      this.paices   = [];
    });
  }

}
