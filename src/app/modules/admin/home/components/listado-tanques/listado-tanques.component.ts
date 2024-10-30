import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'listado-tanques',
  templateUrl: './listado-tanques.component.html',
  styles: [
  ]
})
export class ListadoTanquesComponent {

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatButton) button: MatButton;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = [
    'id',
    'codigo',
    'capacidad_lts',
    'cliente',
    'ubicacion'
  ];

  @Input() set productos(producto: any[]) {
    this.dataSource = new MatTableDataSource(producto);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  filtrar(event: Event): void {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

}