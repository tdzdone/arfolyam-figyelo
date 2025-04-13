import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arfolyam'
})
export class ArfolyamPipe implements PipeTransform {
  transform(ertek: number | undefined): string {
    if (ertek === undefined || ertek === null) {
      return 'n.a.';
    }
    return `$${ertek.toFixed(2)}`;
  }
}
