import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  constructor(private storage: Storage, private router: Router, private platform: Platform, private sqlite: SQLite) { 
    this.storage.create();
    this.crearBD()
  }

  canActivate(){
    
    return true
  }

  //Almacenar un elemento:
  public set(key: string, value: any) {
    this.storage.set(key, value);
  }

  //Obtener un valor:
  public async get(key: string){
    return await this.storage.get(key);
  }

  //Eliminar un elemento:
  public remove(key: string) {
    this.storage.remove(key);
  }

  //Utilizar base de datos SQLite:
  crearBD(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'vehiculos',
        location: 'default'
      }).then((db: SQLiteObject) => {
        console.log("Base de datos creada")
      }).catch(e => {
        console.log("Base de datos no creada")
      })
    })
  }

}
