import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  disponible: boolean = false;

  constructor(private router: Router) { }


  ngOnInit() {
  }

  cambiarDisponibilidad() {
    // Lógica para cambiar la disponibilidad del conductor
    if (this.disponible) {
      console.log('Conductor disponible para viajes.');
    } else {
      console.log('Conductor no disponible.');
    }
  }

  verSolicitudes() {
    // Lógica para ver las solicitudes de pasajeros
    console.log('Mostrando solicitudes de pasajeros...');
  }

  crearViaje() {
    // Lógica para ver las solicitudes de pasajeros
    console.log('Mostrando solicitudes de pasajeros...');
    this.router.navigate(['/crear-viaje']);
  }
  verHistorial() {
    this.router.navigate(['/historial']);
  }
}
