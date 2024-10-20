import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageService } from '../../services/storage.service'; // Importar el servicio de Storage
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = {};  // Variable para almacenar los datos del usuario actual
  imagenPerfil: string | null = null;  // Variable para almacenar la imagen en base64

  @ViewChild('fileInput') fileInput!: ElementRef;  // Referencia al input de archivo

  constructor(private storageService: StorageService, private router: Router) { }

  async ngOnInit() {
    // Obtener los datos del usuario actual desde Ionic Storage
    const usuarioActual = await this.storageService.getItem('usuario_actual');
    if (usuarioActual) {
      this.usuario = usuarioActual;
      this.imagenPerfil = usuarioActual.imagen || null;  // Obtener la imagen si está guardada

      console.log('Datos del usuario actual:', this.usuario); // Verificar si se cargan los datos correctamente
    } else {
      console.log('No se encontró un usuario registrado');
      this.router.navigate(['/home']);  // Redirigir al inicio de sesión si no hay usuario logueado
    }
  }

  // Disparar el input de archivo al hacer clic en la imagen
  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  // Manejar la selección de archivo (imagen)
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenPerfil = reader.result as string;  // Convertir la imagen a base64
      };
      reader.readAsDataURL(file);  // Leer el archivo y convertirlo a base64
    }
  }

  // Guardar la imagen de perfil en Ionic Storage
  async guardarImagen() {
    if (this.imagenPerfil) {
      // Actualizar el usuario con la imagen
      this.usuario.imagen = this.imagenPerfil;

      // Obtener la lista completa de usuarios
      let usuarios = await this.storageService.getItem('usuarios') || [];

      // Buscar el índice del usuario actual en la lista de usuarios
      const index = usuarios.findIndex((user: any) => user.username === this.usuario.username);

      if (index !== -1) {
        // Actualizar la información del usuario en la lista de usuarios
        usuarios[index] = this.usuario;

        // Guardar la lista de usuarios actualizada en Ionic Storage
        await this.storageService.setItem('usuarios', usuarios);
        console.log('Imagen de perfil guardada');
      }
    }
  }

  async cerrarSesion() {
    // Limpiar solo el usuario actual del almacenamiento (opcional, según tu lógica)
    await this.storageService.setItem('usuario_actual', null);
    this.router.navigate(['/home']);  // Redirigir a la página de inicio
  }

  editarPerfil() {
    console.log('Editar perfil clickeado');
  }

  verHistorial() {
    console.log('Ver historial clickeado');
  }

  ajustes() {
    console.log('Ajustes clickeado');
  }

  seguridad() {
    console.log('Seguridad clickeado');
  }
}
