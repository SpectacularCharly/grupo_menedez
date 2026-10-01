import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="col">
        <span>{{ anio }} Grupo Menéndez. Todos los derechos reservados</span>
        <a href="#">Política de Privacidad</a>
      </div>
      <div class="col redes">
        <b>Contáctenos:</b>
        <span>
          <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#fff"/><text x="12" y="18" text-anchor="middle" font-size="16" font-weight="700" font-family="Arial" fill="#1e2535">f</text></svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="6" fill="#fff"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#1e2535" stroke-width="2"/><circle cx="17.2" cy="6.8" r="1.2" fill="#1e2535"/></svg>
          </a>
        </span>
      </div>
      <div class="col">
        <span>Tel: 271 704 4070</span>
        <span>Correo: <a href="mailto:grupomenendez&#64;gmail.com">grupomenendez&#64;gmail.com</a></span>
      </div>
    </footer>
  `,
  styles: [`
    footer { background: var(--noche); color: #fff; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 1rem 2rem; padding: 1.25rem 1.5rem; font-size: .8rem; }
    .col { display: flex; flex-direction: column; gap: .5rem; }
    .redes span { display: flex; gap: .5rem; }
    .redes b { font-size: 1rem; }
    a { color: #fff; }
  `]
})
export class FooterComponent {
  anio = new Date().getFullYear();
}
