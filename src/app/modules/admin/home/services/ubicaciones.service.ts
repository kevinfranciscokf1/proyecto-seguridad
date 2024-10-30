import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  constructor(private _httpClient:HttpClient) { }

  getUbicaciones(){
    return this._httpClient.get('http://localhost:3000/ubicaciones/ubicaciones');
  }
}
