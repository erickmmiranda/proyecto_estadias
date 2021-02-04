import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})
export class MenuUsuariosComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  agregarUsuario:string="assets/img/editarUsuario.png"
  verUsuario:string="assets/img/verUsuario.png"
  
  agregarU()
  {
    this.router.navigate( ['/add']);
  }

  verUsuarios()
  {
    this.router.navigate( ['/view']);
  }
}
