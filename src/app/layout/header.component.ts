import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="barra">
      <a routerLink="/" class="logo" aria-label="Grupo Menéndez, ir a inicio">
        <!-- Reemplaza por tu logo: <img src="assets/img/logo.png" alt="Grupo Menéndez"> -->
        <svg viewBox="0 0 48 40" width="44" height="38" aria-hidden="true">
          <path d="M4 36V6l10 14L24 6l10 14L44 6v30" fill="none" stroke="#c68a00" stroke-width="4"/>
        </svg>
        <span>GRUPO<br><b>MENÉNDEZ</b></span>
      </a>
      <nav aria-label="Principal">
        <a routerLink="/" routerLinkActive="activo" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
        <a routerLink="/conocenos" routerLinkActive="activo">Conócenos</a>
        <a routerLink="/servicios" routerLinkActive="activo">Servicios</a>
      </nav>
    </header>
  `,
  styles: [`
    .barra { background: var(--naranja); display: flex; align-items: center; gap: 1rem; padding-right: 1rem; position: sticky; top: 0; z-index: 10; }
    .logo { background: #fff; display: flex; align-items: center; gap: .4rem; padding: .35rem .6rem; text-decoration: none; color: var(--texto); font-size: .6rem; line-height: 1.1; align-self: stretch; }
    .logo b { font-size: .7rem; }
    nav { flex: 1; display: flex; justify-content: space-around; }
    nav a { color: #fff; text-decoration: none; font-weight: 600; font-size: 1.05rem; padding: .35rem 2rem; border-radius: 0 18px 0 18px; border: 2px solid transparent; transition: background .2s; }
    nav a:hover { background: var(--naranja-oscuro); }
    nav a.activo { border-color: rgba(255,255,255,.55); }
    @media (max-width: 600px) { nav a { padding: .35rem .7rem; font-size: .9rem; } }
  `]
})
export class HeaderComponent {}
