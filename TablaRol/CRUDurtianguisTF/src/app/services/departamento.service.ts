import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../models/Departamento';
import { Subject } from 'rxjs';
const base_url= environment.base;

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private url=`${base_url}/departamentos`;
  private listaCambio = new Subject<Departamento[]>();
  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Departamento[]>(this.url);
  }
  insert(v: Departamento) {
    return this.http.post(this.url, v);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Departamento[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Departamento>(`${this.url}/${id}`);
  }

  update(veh: Departamento) {
    return this.http.put(this.url, veh);
  }
}
