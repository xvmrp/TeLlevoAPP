import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  destino: string = '';
  mensaje: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  buscarConductores() {
    if (this.destino.trim() !== '') {
      console.log(`Buscando conductores disponibles para el destino: ${this.destino}`);
      this.router.navigate(['/buscar-conductor'], { queryParams: { destino: this.destino } });
    } else {
      this.mensaje = 'Por favor, ingresa un destino para buscar conductores.';
    }
  }
}
