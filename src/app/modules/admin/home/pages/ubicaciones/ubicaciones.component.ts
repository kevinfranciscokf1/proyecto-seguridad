import { Component, OnInit } from '@angular/core';
import { UbicacionesService } from '../../services/ubicaciones.service';

@Component({
  selector: 'app-ubicaciones',
  templateUrl: './ubicaciones.component.html',
  styles: [
  ]
})
export class UbicacionesComponent implements OnInit {

  ubicaciones: any[] = [];

  constructor(private _tanquesService: UbicacionesService) { }

  ngOnInit(): void {
    this._tanquesService.getUbicaciones().subscribe(
      (res: any) => {
        this.ubicaciones = res;
      }
    )
  }
}
