import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buscarConductores() {
    // Aquí implementas la lógica para buscar conductores disponibles
    console.log('Buscando conductores disponibles...');
  }

}
