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
  inicioPatente: string = "";
  inicioMarca: string = "";
  inicioModelo: string ="";
  inicioTipo : string = "";

  constructor(private activeRoute: ActivatedRoute) { 

    
    this.activeRoute.queryParams.subscribe(params => {
      if (params['usuario']){
        this.inicioUsuario = params['usuario'];
        this.inicioContrasena = params['contrasena'];
      }
    })
  }

  ngOnInit() {
    console.log(this.inicioUsuario);
    console.log(this.inicioContrasena);
  }

  valorTipovehiculo(event: any){
    this.inicioTipo = event.detail.value;
  }

  mostrarDatos(){
    console.log(this.inicioPatente);
    console.log(this.inicioMarca);
    console.log(this.inicioModelo);
    console.log(this.inicioTipo);
  }

}
