import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, ChartComponent } from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-modal-grafica',
  templateUrl: './modal-grafica.component.html',
})
export class ModalGraficaComponent {

  codigo: number = 0;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor(public dialogRef: MatDialogRef<ModalGraficaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.codigo = data.codigo;
    this.chartOptions = {
      series: [
        {
          name: "My-series",
          data: data.series
        }
      ],
      chart: {
        height: 350,
        type: "bar"
      },
      title: {
        text: "Gráfica"
      },
      xaxis: {
        categories: data.categories
      }
    };
  }

}
