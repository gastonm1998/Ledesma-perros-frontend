import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = "/api";
  constructor(private http:HttpClient) { }

getPerros(){
  return this.http.get(this.url);
}


getUnPerro(nombre_perro:string){
  return this.http.get(this.url+'/'+nombre_perro);
}


 addPerro(perro:Perro)
 {
   return this.http.post(this.url, perro);
 }

   
   deletePerro(id:string){
    return this.http.delete(this.url+'/'+id);
  }

 
  editPerro(id:string, perro:Perro){
    return this.http.put(this.url+'/'+id, perro);
    
  }


}

export interface Perro{
  id?:string;
  nombre_perro?:string;
  fecha_nacimiento_perro?:string;
  lugar_nacimiento_perro?:string;
  raza_perro?:string;
  color_perro?:string;
  sexo_perro?:string;
  pelaje_perro?:string;
  tatuaje_perro?:string;
  padre_perro?:string;
  madre_perro?:string;
  estado_perro?:string;
}
