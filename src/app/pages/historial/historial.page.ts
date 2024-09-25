import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface Viaje {
  destino: string;
  descripcion: string;
  asientos: number;
  costo: number;
  fecha: Date;
}

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  viajes: Viaje[] = [];

  constructor(private alertController: AlertController) {}

  ngOnInit() {
    // Cargar viajes de ejemplo, aquí podrías cargar los viajes desde un servicio
    this.viajes = [
      {
        destino: 'Centro',
        descripcion: 'Viaje al centro de la ciudad',
        asientos: 2,
        costo: 1000,
        fecha: new Date(),
      },
      {
        destino: 'Playa',
        descripcion: 'Viaje a la playa con amigos',
        asientos: 3,
        costo: 1500,
        fecha: new Date(),
      },
    ];
  }

  async verDetalles(viaje: Viaje) {
    const alert = await this.alertController.create({
      header: 'Detalles del Viaje',
      message: `
        Destino: ${viaje.destino}
        Descripción: ${viaje.descripcion}
        Asientos: ${viaje.asientos}
        Costo por persona:$${viaje.costo}
        Fecha: ${viaje.fecha.toLocaleString()}
      `,
      buttons: ['OK'],
    });
    await alert.present();
  }

  async eliminarViaje(viaje: Viaje) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Estás seguro de que deseas eliminar el viaje a ${viaje.destino}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.viajes = this.viajes.filter(v => v !== viaje);
          },
        },
      ],
    });
    await alert.present();
  }
}
