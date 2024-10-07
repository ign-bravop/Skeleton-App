import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController, Animation, AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string = "";
  loginContrasena: string = "";
  animation!: Animation;

  constructor(private animationController: AnimationController, private router: Router, private dbService: DbService, private alertController: AlertController) { }

  ngOnInit() {
    this.animacionTexto();
  }

  async validarCredenciales(){
    const contrasena = await this.dbService.get(this.loginUsuario)
    if (contrasena === this.loginContrasena){
      this.router.navigate(['/inicio']);
    } else {
      const alert = await this.alertController.create({
        header: 'Error en inicio de sesion',
        message: 'Usuario o contrasena incorrectos',
        buttons: ['Volver']
      });

      await alert.present();
    }
  }

  animacionTexto(){
    const texto = document.getElementById('tPrincipal');

    if (texto) {
      this.animation = this.animationController.create()
      .addElement(texto)
      .duration(5000)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(200px)')

      this.animation.play();
      
    }
  }

}
