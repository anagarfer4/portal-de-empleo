import { Injectable, EventEmitter } from '@angular/core';
import { Oferta } from './oferta'
@Injectable()
export class ServicioOfertaService {
  private ofertas: Array<Oferta> = [
    new Oferta('Becario Marketing Digital - Prácticas', 'Right Design Agency (RDA) es un equipo multidisciplinar compuesto por arquitectos, interioristas, diseñadores y gestores inmobiliarios y de comunic...', 'https://d1ewohb620cza6.cloudfront.net/job_cover_xs/job-covers/000/049/631/49631-original.jpg?1493811169', 'Right Design Agency', '03/05/2017', 'Madrid, España'),
    new Oferta('Maquetador JavaScript-HTML5', 'En BABELCreativa (www.babelcreativa.es) nos encontramos en pleno proceso de crecimiento, con oportunidades laborales para personas con poca experie...',
    'https://d1ewohb620cza6.cloudfront.net/user_s3_avatar_126x96/avatars/000/060/193/60193-original.jpg?1385034511', 'BABEL Sistemas de Información', '04/05/2017', 'Madrid, España'),
    new Oferta('Front-end Developer', 'Turijobs es el portal de empleo especializado en Turismo y Hostelería líder en España. Por ello, las mejores empresas del sector buscan nuestro apo...',
    'https://pbs.twimg.com/profile_images/728546380503916544/Moe-prkM.jpg', 'Turijobs', '04/05/2017', 'Barcelona, España'),
    new Oferta('Desarrollador Front End', 'En inMediaStudio buscamos personas que quieran formar parte un equipo que disfruta con la tecnología, y cuyo objetivo principal es trabajar por y p...',
    'https://d1ewohb620cza6.cloudfront.net/job_cover_xs/job-covers/000/049/165/49165-original.jpg?1492430671', 'InMediaStudio Comunicación, S.L.', '04/05/2017', 'Alcobendas, España')

  ];

  constructor() { }
editar(item: any) {
  this.ofertas.push(item)
}
devolverOferta(): Array<Oferta> {
  return this.ofertas;
}
// //enviarOfertaEditada(oferta: any) {
//   //this.ofertaEditada.emit(oferta);
// }
}

// crear función eliminar(oferta) { // le tiene que llegar una oferta
  // tiene que mirar en qué posición está la oferta (función indexOf())
  // con la función slice(posicion del array, cuantos elementos quiero eliminar 1)
//}
