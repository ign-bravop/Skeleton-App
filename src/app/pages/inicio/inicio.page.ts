import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { ToastController } from '@ionic/angular';

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

  constructor(private activeRoute: ActivatedRoute, private dbServices: DbService, private router: Router, private toastController: ToastController) { 
  }

  ngOnInit() {
  }

  almacenarVehiculo(){
    this.dbServices.almacenarVehiculo(this.inicioPatente, this.inicioMarca, this.inicioModelo, this.inicioTipo);
  }

  verRegistro() {
    this.router.navigate(['/vehiculo'])
  }

  async tomarFoto() {
    const image = await Camera.getPhoto({
      source: CameraSource.Camera,
      quality: 90,
      resultType: CameraResultType.Uri
    });

    var imageUrl = image.webPath;
  }

  async verCoordenadas() {
    let coordenadas = await Geolocation.getCurrentPosition();
    let ubicacionTexto = "Latitud: " + coordenadas.coords.latitude + ' Longitud: ' + coordenadas.coords.longitude;
    this.presentToast(ubicacionTexto);
  }
  
  async presentToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1500,
      position: 'top',
    });
    
    await toast.present();
  }

  limpiarDatos(){
    this.inicioPatente = "";
    this.inicioMarca = "";
    this.inicioModelo = "";
    this.inicioTipo = "";
  }

}
