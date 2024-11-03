import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Tipo_prenda } from '../models/Tipo_prenda';
import { Subject } from 'rxjs';
const base_url= environment.base;

@Injectable({
  providedIn: 'root'
})
export class TipoPrendaService {

  private url=`${base_url}/tipos prenda`;

  private listaCambio = new Subject<Tipo_prenda[]>();
  constructor(private http: HttpClient){}

  list(){
    return this.http.get<Tipo_prenda[]>(this.url);
  }
  insert(tp: Tipo_prenda) {
    return this.http.post(this.url, tp);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Tipo_prenda[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Tipo_prenda>(`${this.url}/${id}`);
  }

  update(tpo: Tipo_prenda) {
    return this.http.put(this.url, tpo);
  }
}
