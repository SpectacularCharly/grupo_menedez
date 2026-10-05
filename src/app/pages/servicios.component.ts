import { Component } from '@angular/core';
import { CONSTRUCTORAS } from '../services/servicios.data';

@Component({
  selector: 'app-servicios',
  standalone: true,
  template: `
    <section class="hero" style="background-image:url('assets/img/hero-servicios.jpg'); min-height: 160px"></section>

    <section class="pagina">
      <h2 class="barra-titulo">Nuestros servicios</h2>

      @for (c of constructoras; track c.id) {
        <article class="grupo">
          <h3>{{ c.nombre }}</h3>
          <p class="resumen">{{ c.resumen }}</p>
          <div class="rejilla">
            @for (s of c.servicios; track s.nombre) {
              <div class="tarjeta">
                <h4>{{ s.nombre }}</h4>
                <p>{{ s.descripcion }}</p>
              </div>
            }
          </div>
        </article>
      }
    </section>
  `,
  styles: [`
    .grupo { margin-top: 1.75rem; }
    .grupo h3 { margin: 0; font-size: 1.05rem; border-left: 6px solid var(--naranja); padding-left: .6rem; }
    .resumen { margin: .25rem 0 .75rem .9rem; font-size: .8rem; color: #555; }
    .rejilla { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
    .tarjeta { border: 1px solid #d5dae3; border-radius: 10px; padding: 1rem; display: flex; flex-direction: column; gap: .4rem; }
    .tarjeta h4 { margin: 0; font-size: .9rem; color: var(--pizarra); }
    .tarjeta p { margin: 0; font-size: .8rem; flex: 1; }
  `]
})
export class ServiciosComponent {
  constructoras = CONSTRUCTORAS;
}
