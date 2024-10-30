import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EquipoService } from '../../services/equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'form-add-equipo',
  templateUrl: './form-add-equipo.component.html',
  styles: [
  ]
})
export class FormAddEquipoComponent {

  isLoading: boolean = false;

  public miFormulario: FormGroup = this._fb.group({
    codigo: [0],
    descripcion: [''],
    serie: [''],
    ubicacion: ['']
  });

  constructor(private _fb:FormBuilder, private _equipoServices:EquipoService, private _router:Router) { }

  agregar(){

    this._equipoServices.agregarEquipo(this.miFormulario.value)
    .subscribe(response => {
      this.miFormulario.reset();
      this._router.navigate(['/home/equipo/']);
    });

  }

}
