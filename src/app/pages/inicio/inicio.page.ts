import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  inicioUsuario: string = "";
  inicioContrasena: string = "";
  inicioRun: number = 0
  inicioEstudios: string = "";

  constructor(private activeRoute: ActivatedRoute) { 

    
    this.activeRoute.queryParams.subscribe(params => {
      if (params['usuario']){
        this.inicioUsuario = params['usuario'];
        this.inicioContrasena = params['contrasena'];
      }
    })
  }

  ngOnInit() {
    
  }

}
