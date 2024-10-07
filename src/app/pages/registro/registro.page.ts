import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  usuario: any = {
    correo: "",
    contrasena: ""
  }

  id_usuario: string = "";

  constructor(private router: Router, private dbService: DbService, private storage: Storage) { }

  ngOnInit() {
  }

  async registrarUsuario(){
    this.dbService.set(this.usuario.correo, this.usuario.contrasena);
    this.router.navigate(['/login']);
  }

}
