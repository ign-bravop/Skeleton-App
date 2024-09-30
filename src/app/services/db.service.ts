import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class DbService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage, private router: Router) { 
    this.init();
  }

  canActivate(key: string){
    
    return true
  }

  //Crear el storage:
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  //Almacenar un elemento:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  //Obtener un valor:
  public async get(key: string): Promise<any> {
    return await this._storage?.get(key);
  }

  //Eliminar un elemento:
  public remove(key: string) {
    this._storage?.remove(key);
  }
}
