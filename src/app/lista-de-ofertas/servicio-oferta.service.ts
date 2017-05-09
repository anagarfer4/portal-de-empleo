import { Injectable, EventEmitter } from '@angular/core';
import { Oferta } from './oferta';
@Injectable()
export class ServicioOfertaService {
  private ofertas: Array<Oferta> = [
    new Oferta('Becario Marketing Digital - Prácticas', 'Right Design Agency (RDA) es un equipo multidisciplinar compuesto por arquitectos, interioristas, diseñadores y gestores inmobiliarios y de comunic...', 'https://d1ewohb620cza6.cloudfront.net/job_cover_xs/job-covers/000/049/631/49631-original.jpg?1493811169', 'Right Design Agency', '03/05/2017', 'Madrid, España', 'tiempo completo'),
    new Oferta('Maquetador JavaScript-HTML5', 'En BABELCreativa (www.babelcreativa.es) nos encontramos en pleno proceso de crecimiento, con oportunidades laborales para personas con poca experie...',
    'https://d1ewohb620cza6.cloudfront.net/user_s3_avatar_126x96/avatars/000/060/193/60193-original.jpg?1385034511', 'BABEL Sistemas de Información', '04/05/2017', 'Madrid, España', 'tiempo completo'),
    new Oferta('Front-end Developer', 'Turijobs es el portal de empleo especializado en Turismo y Hostelería líder en España. Por ello, las mejores empresas del sector buscan nuestro apo...',
    'https://pbs.twimg.com/profile_images/728546380503916544/Moe-prkM.jpg', 'Turijobs', '04/05/2017', 'Barcelona, España', 'tiempo completo'),
    new Oferta('Desarrollador Front End', 'En inMediaStudio buscamos personas que quieran formar parte un equipo que disfruta con la tecnología, y cuyo objetivo principal es trabajar por y p...',
    'https://d1ewohb620cza6.cloudfront.net/job_cover_xs/job-covers/000/049/165/49165-original.jpg?1492430671', 'InMediaStudio Comunicación, S.L.', '04/05/2017', 'Alcobendas, España', 'tiempo completo'),
    new Oferta('Jefe de Proyecto Software', 'Necesitamos incorporar a nuestro equipo un Jefe de Proyecto Software con experiencia en el sector de la simulación o el videojuego para gestionar un equipo multidisciplinar en proyectos de simulación. Si te gusta gestionar equipos, tienes habilidades de liderazgo, te encantan los retos y quieres formar parte de un proyecto estable y en constante creci..',
    'http://www.infojobs.net/logo/logo/do-get.xhtml?id=17035424534&dgv=2545832607573629202', 'Simumak', '08/05/2017', 'Madrid, España', 'Jornada completo'),
    new Oferta('Programador Junior (PHP&Java)', 'Para proyecto en Madrid, buscamos Programador Junior que se involucre en largo proyecto en estado de desarrollo y sus correspondientes ampliaciones.Conocimientos mínim..',
    'https://d1ewohb620cza6.cloudfront.net/user_s3_avatar_96x96/avatars/000/455/620/455620-original.jpeg?1482309556', 'RitaWanda', '09/05/2017', 'Madrid, España', 'Jornada completa'),
    new Oferta('Desarrollador Frontend iOS Jr in Madrid', 'Buscamos un desarrollador Front End sin mucha experiencia para incorporarse a ambiente de trabajo juvenil y recién creado para nuevo proyecto. Se requieren conociemientos básicos de JavaScript y NodeJS, además de inglés demostrable y..',
    'https://www.dive.tv/es', 'Dive-TV', '09/05/2017', 'Madrid, España', 'Jornada completa')
    
    
// de este apartado cogen los datos la oferta y la descripcion de la oferta
  ];

  constructor() { }

editar(oferta: Oferta) {
  this.ofertas.push(oferta)
}
devolverOferta(): Array<Oferta> {
  return this.ofertas;
}

devolverDescripcion(indice: number): Oferta { 
  return this.ofertas[indice];
}

eliminarOferta(oferta: Oferta) {
  var ofertaAEliminar = this.ofertas.indexOf(oferta);
  var ofertaEliminada = this.ofertas.splice(ofertaAEliminar, 1);
}


// //enviarOfertaEditada(oferta: any) {
//   //this.ofertaEditada.emit(oferta);
// }
}



