import { Component, ElementRef, ViewChild } from '@angular/core';
import { CONSTRUCTORAS } from '../services/servicios.data';
import { CotizacionFormComponent } from './cotizacion-form.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CotizacionFormComponent],
  template: `
    <section class="hero" style="background-image:url('assets/img/hero-servicios.jpg'); min-height: 160px"></section>

    <section class="pagina">
      <div class="intro">
        <h2 class="barra-titulo">Nuestros servicios</h2>
        <button type="button" class="cta" (click)="abrirFormulario()">Solicitar cotización</button>
      </div>

      @for (c of constructoras; track c.id) {
        <article class="grupo">
          <h3>{{ c.nombre }}</h3>
          <p class="resumen">{{ c.resumen }}</p>
          <div class="rejilla">
            @for (s of c.servicios; track s.nombre) {
              <div class="tarjeta">
                <h4>{{ s.nombre }}</h4>
                <p>{{ s.descripcion }}</p>
                <button type="button" class="enlace" (click)="abrirFormulario(s.nombre)">Cotizar este servicio</button>
              </div>
            }
          </div>
        </article>
      }

      @if (mostrarForm) {
        <div #destino>
          <app-cotizacion-form [servicioInicial]="servicioElegido" (cerrar)="mostrarForm = false" />
        </div>
      }
    </section>
  `,
  styles: [`
    .intro { display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: space-between; }
    .intro .barra-titulo { flex: 1; min-width: 200px; }
    .cta { background: var(--naranja); color: #fff; border: 0; border-radius: 0 18px 0 18px; padding: .55rem 1.4rem; font: inherit; font-weight: 700; cursor: pointer; }
    .cta:hover { background: var(--naranja-oscuro); }
    .grupo { margin-top: 1.75rem; }
    .grupo h3 { margin: 0; font-size: 1.05rem; border-left: 6px solid var(--naranja); padding-left: .6rem; }
    .resumen { margin: .25rem 0 .75rem .9rem; font-size: .8rem; color: #555; }
    .rejilla { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
    .tarjeta { border: 1px solid #d5dae3; border-radius: 10px; padding: 1rem; display: flex; flex-direction: column; gap: .4rem; }
    .tarjeta h4 { margin: 0; font-size: .9rem; color: var(--pizarra); }
    .tarjeta p { margin: 0; font-size: .8rem; flex: 1; }
    .enlace { align-self: flex-start; background: none; border: 0; padding: 0; color: var(--naranja-oscuro); font: inherit; font-size: .8rem; font-weight: 600; cursor: pointer; text-decoration: underline; }
  `]
})
export class ServiciosComponent {
  constructoras = CONSTRUCTORAS;
  mostrarForm = false;
  servicioElegido = '';
  @ViewChild('destino') destino?: ElementRef<HTMLElement>;

  abrirFormulario(servicio = '') {
    this.servicioElegido = servicio;
    this.mostrarForm = false;          // reinicia el formulario para precargar el servicio
    setTimeout(() => {
      this.mostrarForm = true;
      setTimeout(() => this.destino?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    });
  }
}
