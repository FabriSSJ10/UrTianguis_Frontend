import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Tipo_prenda } from '../../../models/Tipoprenda';
import { TipoPrendaService } from '../../../services/tipoprenda.service';


@Component({
  selector: 'app-creareditartipoprenda',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './creareditartipoprenda.component.html',
  styleUrl: './creareditartipoprenda.component.css'
})
export class CreareditartipoprendaComponent implements OnInit{
  form: FormGroup;
  tipo_prenda: Tipo_prenda = new Tipo_prenda();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private dS: TipoPrendaService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      hcodigo: [''],
      htipo_prenda: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
  }

  insertar(): void {
    if (this.form.valid) {
      this.tipo_prenda.id_tipo_prenda = this.form.value.hcodigo;
      this.tipo_prenda.tipo_prenda = this.form.value.htipo_prenda;

      if (this.edicion) {
        this.dS.update(this.tipo_prenda).subscribe(() => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      } else {
        this.dS.insert(this.tipo_prenda).subscribe(() => {
          this.dS.list().subscribe((data) => {
            this.dS.setList(data);
          });
        });
      }
    }
    this.router.navigate(['tipos_prenda']);
  }

  init() {
    if (this.edicion) {
      this.dS.listId(this.id).subscribe((data) => {
        this.form.patchValue({
          hcodigo: data.id_tipo_prenda,
          htipo_prenda: data.tipo_prenda,
        });
      });
    }
  }
}
