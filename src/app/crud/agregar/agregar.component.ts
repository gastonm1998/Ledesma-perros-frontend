import { Component, OnInit } from '@angular/core';
import { CrudService,Perro } from 'app/service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  perros:Perro={
    nombre_perro : "",
    fecha_nacimiento_perro : "",
    lugar_nacimiento_perro : "",
    raza_perro : "",
    color_perro : "",
    sexo_perro : "",
    pelaje_perro : "",
    tatuaje_perro : "",
    padre_perro : "",
    madre_perro : ""
  }

  constructor(private CrudService:CrudService, private Router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    this.CrudService.addPerro(this.perros).subscribe()
    this.Router.navigate(["/table"])
  }

}
