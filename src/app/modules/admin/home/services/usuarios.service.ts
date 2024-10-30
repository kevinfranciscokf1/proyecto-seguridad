import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private _httpClient:HttpClient) { }

  getUsuarios(){
    return this._httpClient.get('http://localhost:3000/usuarios/usuarios');
  }
}
