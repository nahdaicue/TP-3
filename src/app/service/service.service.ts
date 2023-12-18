import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    constructor( private http:HttpClient) { }


    obtenerDatos(): Observable<any> {
      return this.http.get('assets/data/data.json');
    }
    

    vista:boolean=false

    editar():void{
      console.log("hola")
      this.vista=!this.vista;
    }

}