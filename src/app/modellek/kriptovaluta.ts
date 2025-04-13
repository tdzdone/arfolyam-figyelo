export interface Kriptovaluta {
  azonosito?: string;         // Firebase dokumentum ID
  nev: string;                // Pl. Bitcoin, Ethereum
  rovidites: string;          // Pl. BTC, ETH
  aktualisAr?: number;        // Árfolyam USD-ben
  megjegyzes?: string;        // Egyéni jegyzet
  utolsoFrissites?: Date;     // Mikor frissült utoljára
  kategoria?: string;
}
