import { InicioSesionSService } from './../../service/inicio-sesion-s.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  inicioSesion = false

  constructor(private Router:Router, private inicioSesionService: InicioSesionSService) { }

  ngOnInit(): void {
  }

  onSubmit(values:any ):void{
    console.log("form values",values.usuario)
    console.log("form values",values.contrasena)
    console.log("form values",typeof (values.usuario) )
    console.log("form values",typeof (values.contrasena) )
    if (values.usuario == "vigilancia" && values.contrasena == "vigilancia2023") {

      this.inicioSesion = true
      console.log("etapa")
    } else {
      console.log("fallo")
    }
    console.log(this.inicioSesion)
    this.inicioSesionService.estadoDeSesion.emit(this.inicioSesion)
    this.inicioSesionService.prueba = this.inicioSesion
    this.Router.navigate(["/table"])
  } 
  
}
