import { Component, EventEmitter, Output } from '@angular/core';
import { Kriptovaluta } from '../../modellek/kriptovaluta';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-uj-kriptovaluta',
  templateUrl: './uj-kriptovaluta.component.html',
  styleUrls: ['./uj-kriptovaluta.component.scss']
})
export class UjKriptovalutaComponent {
  ujKripto: Kriptovaluta = {
    nev: '',
    rovidites: '',
    aktualisAr: undefined,
    megjegyzes: '',
    kategoria: 'nagy'
  };
  constructor(private snackBar: MatSnackBar) {}

  @Output() kriptoHozzaadva = new EventEmitter<Kriptovaluta>();

  ujKriptoHozzaadasa() {
    console.log('Új kriptovaluta:', this.ujKripto);
    this.kriptoHozzaadva.emit(this.ujKripto); //továbbítjuk a szülőnek
    this.ujKripto = { nev: '', rovidites: '', aktualisAr: undefined, megjegyzes: '', kategoria: 'nagy'};
  }
}
