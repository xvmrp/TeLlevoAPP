import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mensaje: string = '';
  usr: Usuario = {
    username: '',
    password: '',
    role: ''  // Añadimos el rol aquí con un valor por defecto vacío
  }

  constructor(private router: Router) { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.usr);

    // Validación de usuario
    if (this.usr.username === "usuario" && this.usr.password === "123") {
      console.log("Acceso usuario");
      this.usr.role = 'usuario';  // Asignar el rol de usuario
      this.router.navigate(['/role-selection']);  // Navega a selección de rol
    } 
    
    // Validación de administrador
    else if (this.usr.username === "admin" && this.usr.password === "admin123") {
      console.log("Acceso admin");
      this.usr.role = 'admin';  // Asignar el rol de administrador
      this.router.navigate(['/admin']);  // Navega a página de administrador
    } 
    
    // Credenciales incorrectas
    else {
      this.mensaje = 'No existen credenciales con esos valores';
    }
  }
}
