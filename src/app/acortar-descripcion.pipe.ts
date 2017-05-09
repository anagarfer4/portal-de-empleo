import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'acortarDescripcion'
})
export class AcortarDescripcionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.slice(0, 300) + "...";
  }

}
