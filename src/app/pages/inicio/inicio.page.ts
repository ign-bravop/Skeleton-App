import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

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

  constructor(private activeRoute: ActivatedRoute, private dbServices: DbService) { 
  }

  ngOnInit() {
  
  }

  almacenarVehiculo(){
    this.dbServices.almacenarVehiculo(this.inicioPatente, this.inicioMarca, this.inicioModelo, this.inicioTipo);
  }

  limpiarDatos(){
    this.inicioPatente = "";
    this.inicioMarca = "";
    this.inicioModelo = "";
    this.inicioTipo = "";
  }

}
