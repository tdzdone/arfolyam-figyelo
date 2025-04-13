import { Component, Input } from '@angular/core';
import { Kriptovaluta } from '../../modellek/kriptovaluta';

@Component({
  selector: 'app-kriptovaluta-lista',
  templateUrl: './kriptovaluta-lista.component.html',
  styleUrls: ['./kriptovaluta-lista.component.scss']
})
export class KriptovalutaListaComponent {
  @Input() kriptok: Kriptovaluta[] = [];

  constructor() {}
}
