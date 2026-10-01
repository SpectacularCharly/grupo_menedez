import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  template: `
    <section class="hero" style="background-image:url('assets/img/hero-inicio.jpg'); min-height: 300px">
      <div class="lema">
        <h1>Grupo Menéndez</h1>
        <p>"Construyendo el futuro con solidez y confianza."</p>
      </div>
    </section>

    <section class="pagina">
      <h2 class="barra-titulo centro">Empresas Asociadas</h2>
      <div class="logos">
        @for (e of empresas; track e.nombre) {
          <div class="logo-card" [style.--c]="e.color">
            <span>{{ e.nombre }}</span>
            <small>{{ e.sub }}</small>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .lema { padding: 1rem 1.25rem; color: #fff; }
    .lema h1 { margin: 0; font-size: 1.15rem; }
    .lema p { margin: .2rem 0 0; font-size: .65rem; font-style: italic; }
    .centro { text-align: center; }
    .logos { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem; }
    .logo-card { background: #111; color: var(--c); min-height: 80px; display: flex; flex-direction: column; align-items: center; justify-content: center; font-weight: 800; font-size: 1.4rem; letter-spacing: .04em; border: 1px solid #333; }
    .logo-card small { color: #ddd; font-size: .5rem; font-weight: 500; letter-spacing: .15em; }
  `]
})
export class InicioComponent {
  // Para usar los logos reales, cambia cada tarjeta por <img src="assets/img/logo-xxx.png">
  empresas = [
    { nombre: 'DRECIMEN', sub: 'CONSTRUCCIONES', color: '#ffffff' },
    { nombre: 'MECAHNO', sub: 'CONSTRUCCIONES S.A. DE C.V.', color: '#ffb300' },
    { nombre: 'RUIMEN', sub: 'CONSTRUCCIONES RUBÉN VERACRUZ S.A. DE C.V.', color: '#f5c400' }
  ];
}
