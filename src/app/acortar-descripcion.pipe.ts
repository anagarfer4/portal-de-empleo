import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acortarDescripcion'
})
export class AcortarDescripcionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.length > 300) {
    return value.slice(0, 300) + "...";
  }
  return value;
  }
}
