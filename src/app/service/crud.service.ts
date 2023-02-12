import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url = "http://localhost:3000/api";
  constructor(private http:HttpClient) { }

getPerros(){
  return this.http.get(this.url);
}


}
