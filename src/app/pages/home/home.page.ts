import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  usr = {
    username: '',
    password: ''
  };

  constructor(private storageService: StorageService, private router: Router) {}

  async onSubmit() {
    // Obtener el usuario guardado en Storage
    const usuario = await this.storageService.getItem('usuario');

    if (usuario) {
      // Validar credenciales con el username y la contraseña
      const usernameIngresado = this.usr.username.trim();
      const passwordIngresado = this.usr.password.trim();

      // Comparar credenciales
      if (usernameIngresado === usuario.username && passwordIngresado === usuario.password) {
        console.log('Inicio de sesión exitoso');
        this.router.navigate(['/role-selection']);  // Redirigir a la página de selección de rol
      } else {
        console.log('Credenciales incorrectas');
      }
    } else {
      console.log('No hay usuarios registrados');
    }
  }
}
