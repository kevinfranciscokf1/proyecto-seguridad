import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TanqueService {

  constructor(private _httpClient:HttpClient) { }

  getTanques(){
    return this._httpClient.get('http://localhost:3000/tanques/tanques');
  }
}
