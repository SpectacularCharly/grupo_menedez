export interface Servicio {
  nombre: string;
  descripcion: string;
}
export interface Constructora {
  id: string;
  nombre: string;
  resumen: string;
  servicios: Servicio[];
}

// Contenido de ejemplo: ajusta nombres y descripciones a los servicios reales de cada empresa.
export const CONSTRUCTORAS: Constructora[] = [
  {
    id: 'drecimen',
    nombre: 'Drecimen Construcciones',
    resumen: 'Movimiento de tierras y maquinaria pesada.',
    servicios: [
      { nombre: 'Excavación y movimiento de tierras', descripcion: 'Cortes, rellenos, nivelación y limpieza de terreno con maquinaria propia.' },
      { nombre: 'Renta de maquinaria', descripcion: 'Retroexcavadoras, excavadoras y camiones con operador.' },
      { nombre: 'Terracerías y caminos', descripcion: 'Apertura, revestimiento y mantenimiento de caminos de acceso.' }
    ]
  },
  {
    id: 'mecahno',
    nombre: 'Mecahno Construcciones',
    resumen: 'Obra hidráulica y civil.',
    servicios: [
      { nombre: 'Obra hidráulica', descripcion: 'Redes de agua potable, drenaje sanitario y pluvial.' },
      { nombre: 'Obra civil', descripcion: 'Cimentaciones, muros, guarniciones y estructuras de concreto.' },
      { nombre: 'Mantenimiento de infraestructura', descripcion: 'Reparación y rehabilitación de obras existentes.' }
    ]
  },
  {
    id: 'ruimen',
    nombre: 'Ruimen Construcciones',
    resumen: 'Obra pública y privada.',
    servicios: [
      { nombre: 'Urbanización y pavimentación', descripcion: 'Calles, banquetas y obras de urbanización para gobierno y particulares.' },
      { nombre: 'Edificación', descripcion: 'Construcción de naves, bodegas y espacios comerciales.' },
      { nombre: 'Supervisión y control de calidad', descripcion: 'Seguimiento de obra para entregar a tiempo y con calidad.' }
    ]
  }
];
