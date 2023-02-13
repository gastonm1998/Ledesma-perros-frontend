import { Component, OnInit } from '@angular/core';
import { CrudService,Perro } from 'app/service/crud.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  perros:Perro={
    id:"",
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

  constructor(private CrudService:CrudService, private Router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const nombre_entrada = <string>this.activatedRoute.snapshot.params.nombre_perro
    console.log("id de entrada  "+ nombre_entrada)

    if(nombre_entrada){
      this.CrudService.getUnPerro(nombre_entrada).subscribe(
        res =>{
          this.perros = res[0]
        },
        err => console.log(err)
      )
    }
  }

}
