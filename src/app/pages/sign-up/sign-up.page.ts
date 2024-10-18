import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service'; // Importar el servicio de Storage

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {

  nombre: string = '';
  apellido: string = '';
  username: string = '';
  password: string = '';
  canProceed: boolean = false;
  nombreError: string = '';
  apellidoError: string = '';
  usernameError: string = '';
  passwordError: string = '';

  constructor(private storageService: StorageService, private router: Router) { }

  // Validar todos los campos
  Validar() {
    this.nombreError = this.nombre.length >= 5 ? '' : 'El nombre debe tener al menos 5 caracteres.';
    this.apellidoError = this.apellido.length >= 5 ? '' : 'El apellido debe tener al menos 5 caracteres.';
    this.usernameError = this.username.length >= 3 ? '' : 'El nombre de usuario debe tener al menos 3 caracteres.';
    this.passwordError = this.password.length >= 8 ? '' : 'La contraseña debe tener al menos 8 caracteres.';

    this.canProceed = !this.nombreError && !this.apellidoError && !this.usernameError && !this.passwordError;
  }

  // Registrar el usuario
  async registrarUsuario() {
    if (this.canProceed) {
      const nuevoUsuario = {
        nombre: this.nombre.trim(),
        apellido: this.apellido.trim(),
        username: this.username.trim(),  // Aseguramos que no haya espacios en blanco al principio/final
        password: this.password.trim()  // Aseguramos que no haya espacios en blanco al principio/final
      };

      // Guardar el usuario en Ionic Storage
      await this.storageService.setItem('usuario', nuevoUsuario);

      // Navegar a la página de inicio de sesión
      this.router.navigate(['/home']);
    } else {
      console.log('Por favor completa todos los campos correctamente.');
    }
  }
}
