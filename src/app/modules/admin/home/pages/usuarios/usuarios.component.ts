import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {

  usuarios: any[] = [];

  constructor(private _usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this._usuariosService.getUsuarios().subscribe(
      (res: any) => {
        this.usuarios = res;
      }
    )
  }

}
