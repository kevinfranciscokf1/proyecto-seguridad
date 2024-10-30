import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDrawer } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { ModalGraficaComponent } from '../modal-grafica/modal-grafica.component';
import { EquipoService } from '../../services/equipo.service';

@Component({
  selector: 'listado-equipos',
  templateUrl: './listado-equipos.component.html',
  styles: [
  ]
})
export class ListadoEquiposComponent implements OnInit {

  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  @ViewChild(MatButton) button: MatButton;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTableDataSource) table: MatTableDataSource<any>;

  displayedColumns: string[] = [
    'id',
    'codigo',
    'descripcion',
    'serie',
    'ubicacion',
    'acciones'
  ];

  @Input() set productos(producto: any[]) {
    this.dataSource = new MatTableDataSource(producto);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public datosGrafica: any[];

  constructor(public dialog: MatDialog, private _equipoService: EquipoService) { }

  ngOnInit(): void {

  }

  filtrar(event: Event): void {
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }

  openModal(codigo: number): void {

    this._equipoService.getDatosGrafica().subscribe((data: any) => {
      this.datosGrafica = data;
    });

    const datosGraficaPorCodigo = this.datosGrafica.find((item: any) => item.CODIGO === codigo).mediciones;
    const series = datosGraficaPorCodigo.map((item: any) => item.MEDIDA_CM);
    const categories = datosGraficaPorCodigo.map((item: any) => item.FECHA_HORA);

    const dialogRef = this.dialog.open(ModalGraficaComponent, {
      width: '800px',
      data: { codigo, series, categories }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showHistorico(codigo: number): void {
    this._equipoService.getHistorico(codigo).subscribe((data: any) => {
      const byteArray = atob(data);

      // Convierte el array de bytes en un array buffer
      const arrayBuffer = new ArrayBuffer(byteArray.length);
      const view = new Uint8Array(arrayBuffer);

      for (let i = 0; i < byteArray.length; i++) {
        view[i] = byteArray.charCodeAt(i);
      }

      // Crea un Blob a partir del array buffer
      const blob = new Blob([arrayBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

      // Crea una URL de objeto para el Blob
      const blobURL = URL.createObjectURL(blob);

      // Crea un enlace para descargar el archivo
      const a = document.createElement('a');
      a.href = blobURL;
      a.download = 'archivo.xlsx'; // Cambia el nombre de archivo según tu preferencia

      // Simula un clic en el enlace para iniciar la descarga
      a.click();

      // Limpia la URL de objeto cuando ya no sea necesaria
      URL.revokeObjectURL(blobURL);


    });
  }

}
