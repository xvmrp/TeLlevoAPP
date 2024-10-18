import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StorageService } from '../../services/storage.service'; // Importar el servicio de Storage
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: any = {};  // Variable para almacenar los datos del usuario
  imagenPerfil: string | null = null;  // Variable para almacenar la imagen en base64

  @ViewChild('fileInput') fileInput!: ElementRef;  // Referencia al input de archivo

  constructor(private storageService: StorageService, private router: Router) { }

  async ngOnInit() {
    // Obtener los datos del usuario desde Ionic Storage
    const datosUsuario = await this.storageService.getItem('usuario');
    if (datosUsuario) {
      this.usuario = datosUsuario;
      this.imagenPerfil = datosUsuario.imagen || null;  // Obtener la imagen si está guardada

      console.log('Datos del usuario:', this.usuario); // Verificar si se cargan los datos correctamente
    } else {
      console.log('No se encontró un usuario registrado');
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

      // Guardar el usuario con la imagen actualizada
      await this.storageService.setItem('usuario', this.usuario);
      console.log('Imagen de perfil guardada');
    }
  }

  cerrarSesion() { // Limpiar el almacenamiento
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
