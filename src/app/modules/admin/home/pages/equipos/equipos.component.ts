import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styles: [
  ]
})
export class EquiposComponent implements OnInit {

  equipos: any[] = [];

  constructor(private _equiposService: EquipoService, private _router:Router) { }

  ngOnInit(): void {
    this._equiposService.getEquipos().subscribe(
      (res: any) => {
        this.equipos = res;
      }
    )
  }

  agregarEquipo(){
    this._router.navigate(['/home/equipo/add']);
  }
}
