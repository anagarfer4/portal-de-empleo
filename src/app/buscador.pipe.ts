import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador',
  pure: false
})
    
export class BuscadorPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value.length === 0) {
      return value;
    }
    var resultArray = [];
    for (var item of value) {
      if (item.nombre.match('^.*' + args + '.*$') || item.descripcion.match('^.*' + args + '.*$')||item.empresa.match('^.*' + args + '.*$') || item.ciudad.match('^.*' + args + '.*$')) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
