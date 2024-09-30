import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroUsuario: string = "";
  registroContrasena: string = ""

  constructor(private router: Router, private dbService: DbService) { }

  ngOnInit() {
  }

  registrarUsuario(){
    let usuario = [this.registroUsuario, this.registroContrasena]
    this.dbService.set('usuario1', usuario)
    this.router.navigate(['/login'])
  }

}
