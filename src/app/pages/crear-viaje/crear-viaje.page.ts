import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-crear-viaje',
  templateUrl: './crear-viaje.page.html',
  styleUrls: ['./crear-viaje.page.scss'],
})
export class CrearViajePage implements OnInit {
  destino: string = '';
  descripcion: string = '';
  asientos: number | null = null;
  costo: number | null = null;

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  isComplete(): boolean {
    return this.destino.trim() !== '' && this.descripcion.trim() !== '' && this.asientos !== null && this.costo !== null;
  }

  async crearViaje() {
    if (this.isComplete()) {
      const alert = await this.alertController.create({
        header: 'Confirmación',
        message: `Viaje creado a ${this.destino} con ${this.asientos} asientos a un costo de ${this.costo} por persona. Descripción: "${this.descripcion}"`,
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos antes de crear el viaje.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }
}
