export interface Tranzakcio {
    id?: string;
    kriptoNev: string;
    tipus: 'vétel' | 'eladás';
    mennyiseg: number;
    datum: Date;
  }
  