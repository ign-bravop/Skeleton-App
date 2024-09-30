import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';
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
  canActivate: string = "";

  constructor(private animationController: AnimationController, private router: Router, private dbService: DbService) { }

  ngOnInit() {
    this.animacionTexto();
  }

  async validarCredenciales(){
    const usuario = await this.dbService.get('usuario1')
    if(usuario[0] == this.loginUsuario && usuario[1] == this.loginContrasena){
      //console.log('Dirigirse al login')
      this.canActivate = "1";
      this.dbService.canActivate(this.canActivate);
    } else {
      console.log('Error de usuario o contrasena')
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
