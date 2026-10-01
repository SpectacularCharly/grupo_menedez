import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CONSTRUCTORAS } from '../services/servicios.data';

@Component({
  selector: 'app-cotizacion-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <section class="cotizacion" id="cotizacion" aria-labelledby="titulo-cotizacion">
      <header>
        <h2 id="titulo-cotizacion">Solicita tu cotización</h2>
        <button type="button" class="cerrar" (click)="cerrar.emit()" aria-label="Cerrar formulario">×</button>
      </header>

      @if (enviado) {
        <p class="ok" role="status">¡Gracias! Recibimos tu solicitud y te contactaremos pronto.</p>
      } @else {
        <form [formGroup]="form" (ngSubmit)="enviar()" novalidate>
          <label>Nombre completo
            <input formControlName="nombre" autocomplete="name">
            @if (invalido('nombre')) { <small class="error">Escribe tu nombre.</small> }
          </label>

          <label>Empresa (opcional)
            <input formControlName="empresa" autocomplete="organization">
          </label>

          <label>Correo electrónico
            <input type="email" formControlName="correo" autocomplete="email">
            @if (invalido('correo')) { <small class="error">Escribe un correo válido.</small> }
          </label>

          <label>Teléfono
            <input type="tel" formControlName="telefono" autocomplete="tel" inputmode="numeric">
            @if (invalido('telefono')) { <small class="error">Escribe 10 dígitos.</small> }
          </label>

          <label class="ancho">Servicio
            <select formControlName="servicio">
              <option value="" disabled>Selecciona un servicio</option>
              @for (c of constructoras; track c.id) {
                <optgroup [label]="c.nombre">
                  @for (s of c.servicios; track s.nombre) {
                    <option [value]="s.nombre">{{ s.nombre }}</option>
                  }
                </optgroup>
              }
            </select>
            @if (invalido('servicio')) { <small class="error">Elige un servicio.</small> }
          </label>

          <label class="ancho">Describe tu proyecto
            <textarea rows="4" formControlName="mensaje" placeholder="Ubicación, tipo de obra, fechas estimadas…"></textarea>
          </label>

          <button type="submit" class="enviar ancho">Enviar solicitud</button>
        </form>
      }
    </section>
  `,
  styles: [`
    .cotizacion { max-width: 640px; margin: 2rem auto 0; border: 2px solid var(--naranja); border-radius: 14px; padding: 1.25rem; background: #fffaf0; }
    header { display: flex; justify-content: space-between; align-items: center; }
    h2 { margin: 0; font-size: 1.15rem; }
    .cerrar { background: none; border: 0; font-size: 1.6rem; cursor: pointer; line-height: 1; }
    form { display: grid; grid-template-columns: 1fr 1fr; gap: .9rem 1rem; margin-top: 1rem; }
    label { display: flex; flex-direction: column; gap: .25rem; font-size: .8rem; font-weight: 600; }
    .ancho { grid-column: 1 / -1; }
    input, select, textarea { font: inherit; font-weight: 400; padding: .5rem .6rem; border: 1px solid #b9c0cc; border-radius: 8px; background: #fff; }
    .error { color: #b3261e; font-weight: 500; }
    .enviar { background: var(--naranja); color: #fff; border: 0; padding: .7rem; font: inherit; font-weight: 700; border-radius: 8px; cursor: pointer; }
    .enviar:hover { background: var(--naranja-oscuro); }
    .ok { background: #e7f6ea; padding: 1rem; border-radius: 8px; margin: 1rem 0 0; }
    @media (max-width: 560px) { form { grid-template-columns: 1fr; } }
  `]
})
export class CotizacionFormComponent implements OnInit {
  @Input() servicioInicial = '';
  @Output() cerrar = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  constructoras = CONSTRUCTORAS;
  enviado = false;

  form = this.fb.nonNullable.group({
    nombre: ['', Validators.required],
    empresa: [''],
    correo: ['', [Validators.required, Validators.email]],
    telefono: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    servicio: ['', Validators.required],
    mensaje: ['']
  });

  ngOnInit() {
    if (this.servicioInicial) this.form.patchValue({ servicio: this.servicioInicial });
  }

  invalido(campo: string) {
    const c = this.form.get(campo);
    return !!c && c.invalid && (c.touched || c.dirty);
  }

  enviar() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // TODO: conectar con tu backend o servicio de correo (por ejemplo, un POST a tu API).
    console.log('Solicitud de cotización', this.form.getRawValue());
    this.enviado = true;
  }
}
