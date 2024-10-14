import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  constructor(private storage: Storage, private router: Router, private sqlite: SQLite, private platform: Platform) { 
    this.storage.create();
    //this.crearBD();
    this.crearBD1();
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

  //Creacion de la base de datos:
  crearBD(){
    this.sqlite.create({
      name: 'vehiculo',
      location: 'default'
    }).then((db: SQLiteObject) => {
      console.log('Base de datos creada')
    }).catch(e => {
      console.log('Base de datos NO creada')
    })
  }

  //Creacion de la bd con platform:
  crearBD1(){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'vehiculos',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('CREATE TABLE IF NOT EXISTS VEHICULO(PPU VARCHAR(6), MARCA VARCHAR(15), MODELO VARCHAR(15), TIPO VARCHAR(10))',[]).then(() => {
          console.log('IBP: Tabla creada')
        }).catch(e => {
          console.log('IBP: Error tabla no creada')
        })
      }).catch(e => {
        console.log('IBP: Base de datos no creada, ERROR')
      })
    })
  }

  //Funcion para almacenar vehiculo:
  almacenarVehiculo(ppu: string, marca: string, modelo: string, tipo: string){
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'vehiculos',
        location: 'default'
      }).then((db: SQLiteObject) => {
        db.executeSql('INSERT INTO VEHICULO VALUES(?, ?, ?, ?)',[ppu, marca, modelo, tipo]).then(() => {
          console.log('IBP: Vehiculo registrado')
        }).catch(e => {
          console.log('IBP: Vehiculo no registrado')
        })
      }).catch(e => {
        console.log('IBP: Base de datos no creada, ERROR')
      })
    })
  }

  canActivate(){
    return true;
  }
}
