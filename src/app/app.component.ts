import { Component } from '@angular/core';
import { Kriptovaluta } from './modellek/kriptovaluta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arfolyam-figyelo';
  kriptovalutak: Kriptovaluta[] = [
    { nev: 'Bitcoin', rovidites: 'BTC', aktualisAr: 61000, megjegyzes: 'Figyelni 55k alatt' },
    { nev: 'Ethereum', rovidites: 'ETH', aktualisAr: 3100 },
  ];

  constructor() {
    console.log('Kriptók a komponens indulásakor:', this.kriptovalutak);
  }
  

  ujKriptoFelvetele(kripto: Kriptovaluta) {
    this.kriptovalutak.push(kripto);
  }
  
}

