import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mensaje:string=''
  usr:Usuario={
    username:'',
    password:''
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.usr);
    if(this.usr.username=="wacoldo" && this.usr.password=="123"){
      console.log("Acceso ok");
        this.router.navigate(['/home'])
    }
    else{
      this.mensaje='No existe credenciales con esos valores';
    }
  }

}
