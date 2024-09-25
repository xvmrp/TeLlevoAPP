import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> 5772928 (speed run)

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  disponible: boolean = false;
<<<<<<< HEAD
  constructor() { }
=======
  constructor(private router: Router) { }
>>>>>>> 5772928 (speed run)

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

<<<<<<< HEAD
  verSolicitudes() {
    // Lógica para ver las solicitudes de pasajeros
    console.log('Mostrando solicitudes de pasajeros...');
  }

=======
  crearViaje() {
    // Lógica para ver las solicitudes de pasajeros
    console.log('Mostrando solicitudes de pasajeros...');
    this.router.navigate(['/crear-viaje']);
  }
  verHistorial() {
    this.router.navigate(['/historial']);
  }
>>>>>>> 5772928 (speed run)
}
