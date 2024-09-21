import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Usuario {
  username: string;
  email: string;
  edad: number;
  role: string;
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  usuario: Usuario = {
    username: 'Juan Pérez',
    email: 'juan.perez@example.com',
    edad: 25,
    role: 'Pasajero' // O "Conductor", dependiendo del rol del usuario
  };

  constructor(private router: Router, private alertController: AlertController) {}

  // Función para editar el perfil
  async editarPerfil() {
    const alert = await this.alertController.create({
      header: 'Editar Perfil',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Nombre de usuario',
          value: this.usuario.username
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Correo electrónico',
          value: this.usuario.email
        },
        {
          name: 'edad',
          type: 'number',
          placeholder: 'Edad',
          value: this.usuario.edad
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Edición cancelada');
          }
        }, {
          text: 'Guardar',
          handler: (data) => {
            // Actualizar la información del usuario con los datos ingresados
            this.usuario.username = data.username;
            this.usuario.email = data.email;
            this.usuario.edad = data.edad;
            console.log('Perfil actualizado:', this.usuario);
          }
        }
      ]
    });

    await alert.present();
  }

  // Redirigir a la página de historial de viajes
  verHistorial() {
    this.router.navigate(['/historial']); // Ajusta la ruta según sea necesario
  }

  // Redirigir a la página de ajustes
  ajustes() {
    this.router.navigate(['/ajustes']); // Ajusta la ruta según sea necesario
  }

  // Redirigir a la página de seguridad
  seguridad() {
    this.router.navigate(['/seguridad']); // Ajusta la ruta según sea necesario
  }

  // Función para cerrar sesión
  cerrarSesion() {
    // Aquí podrías agregar la lógica para cerrar sesión, como borrar los tokens de autenticación.
    console.log('Cerrando sesión...');
    this.router.navigate(['/home']); // Redirige al login
  }
}
