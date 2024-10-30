import { Component, OnInit } from '@angular/core';
import { TanqueService } from '../../services/tanques.service';

@Component({
  selector: 'app-tanques',
  templateUrl: './tanques.component.html',
  styles: [
  ]
})
export class TanquesComponent implements OnInit {

  tanques: any[] = [];

  constructor(private _tanquesService: TanqueService) { }

  ngOnInit(): void {
    this._tanquesService.getTanques().subscribe(
      (res: any) => {
        this.tanques = res;
      }
    )
  }
}
