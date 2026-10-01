import { Component } from '@angular/core';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  template: `
    <section class="hero" style="background-image:url('assets/img/hero-conocenos.jpg'); min-height: 160px"></section>

    <section class="pagina contenido">
      <div class="texto">
        <h2 class="barra-titulo">¿Quiénes somos?</h2>
        <p>
          Somos una empresa dedicada a la construcción de proyectos de obra hidráulica y obra civil.
          Tenemos equipo, maquinaria y transporte para atender a nuestros clientes en proyectos de
          infraestructura de pequeña y mediana complejidad. Nos dedicamos a la construcción de obras
          gubernamentales y privadas, satisfaciendo a nuestros clientes por medio de la exigencia en el
          control de calidad de nuestros productos terminados.
        </p>

        <h2 class="barra-titulo">Misión y visión</h2>
        <p>
          Crecer como empresa constructora y ser más eficiente, para llegar a colocarnos en una de las
          empresas del ramo. Liderar el mercado por medio de la responsabilidad y eficiencia, cumpliendo
          a tiempo con todos y cada uno de los trabajos encomendados, lograr que todo nuestro personal se
          sienta motivado y orgulloso de pertenecer a nuestra organización, fomentando el control y
          calidad en el servicio, buscando siempre dar lo mejor de sí mismos y con esto lograr la
          satisfacción del cliente.
        </p>

        <h2 class="barra-titulo">Valores</h2>
        <ul>
          <li>Integridad, honestidad y conducta</li>
          <li>Compromiso con calidad</li>
        </ul>
      </div>
      <figure class="foto" style="background-image:url('assets/img/conocenos-lateral.jpg')" aria-label="Obra en construcción"></figure>
    </section>
  `,
  styles: [`
    .contenido { display: grid; grid-template-columns: 1fr 200px; gap: 1.5rem; align-items: start; }
    h2 { font-size: 1rem; margin-top: .75rem; }
    p, li { font-size: .8rem; margin: .5rem 0 1rem; }
    ul { padding-left: 1.1rem; margin: 0; }
    .foto { margin: 0; min-height: 220px; background-color: #8aa0b8; background-size: cover; background-position: center; border-radius: 14px; }
    @media (max-width: 700px) { .contenido { grid-template-columns: 1fr; } }
  `]
})
export class ConocenosComponent {}
