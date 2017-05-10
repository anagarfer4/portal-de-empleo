import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acortarDescripcion'
})
export class AcortarDescripcionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 100) {
    return value.slice(0, 100) + "...";
  }
  return value;
  }
}
