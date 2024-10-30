import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddEquipo } from '../interfaces/add-equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private _httpClient:HttpClient) { }

  getEquipos(){
    return this._httpClient.get('http://localhost:3000/equipos/equipos');
  }

  getDatosGrafica(){
    return this._httpClient.get('http://localhost:3000/mediciones/mediciones');

  }

  agregarEquipo(equipo:AddEquipo){
    return this._httpClient.post('http://localhost:3000/equipos/equipos', equipo);
  }

  getHistorico(codigo:number){
    return this._httpClient.get('http://localhost:3000/mediciones/historico/' + codigo);

  }
}
