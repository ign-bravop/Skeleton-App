import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AnimationController, Animation } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUsuario: string = "";
  loginContrasena: string = "";
  animation!: Animation;

  constructor(private animationController: AnimationController, private router: Router) { }

  ngOnInit() {
    this.animacionTexto();
  }

  validarCredenciales(){

    let navigationExtras: NavigationExtras = {
      queryParams : {
        usuario: this.loginUsuario,
        contrasena: this.loginContrasena
      }
    }

    this.router.navigate(['/inicio'], navigationExtras);
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
