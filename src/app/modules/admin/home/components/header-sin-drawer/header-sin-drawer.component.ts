import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'header-sin-drawer',
  templateUrl: './header-sin-drawer.component.html'
})
export class HeaderSinDrawerComponent {

  @Input() titulo: string = ''; 
  @Input() modulo: string = '';
  fecha: Date = new Date();

}
