
import { Component, OnInit } from '@angular/core';
import { CrudService,Perro } from 'app/service/crud.service';
import { Router } from '@angular/router';
import { InicioSesionSService } from './../../service/inicio-sesion-s.service';



declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;

    //crud
    ListarPerro: Perro[]
    //icicio session
     sesion_iniciada=false
    prueba2= this.inicioSesionService.prueba
    constructor (private CrudService:CrudService, private router:Router,private inicioSesionService: InicioSesionSService){
        

    }
    ngOnChanges() {
        console.log(`ngOnChanges - data is `);
        this.pp(this.sesion_iniciada)
      }
      
      ngDoCheck() {
        console.log('ngDoCheck');
        
      }
      ngAfterContentInit() {
        console.log('ngAfterContentInit');
      }
      ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
      }
      ngAfterViewInit() {
        console.log('ngAfterViewInit');
      }
      ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
      }
      ngOnDestroy() {
        console.log('ngOnDestroy');
      }
  
    ngOnInit(){
        console.log("primera sesion "+this.sesion_iniciada)
        console.log("prueba2 "+this.prueba2)

        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };

        
        //this.pp(this.sesion_iniciada)
        //crud
        this.listarPerros()
        //this.pp(this.sesion_iniciada)
       
    }
     pp(sesion_iniciada){
        this.inicioSesionService.estadoDeSesion.subscribe(
            estadoDeSesion =>{
               console.log("sesion lista ejecutada "+this.sesion_iniciada)
              this.sesion_iniciada = estadoDeSesion
              console.log("sesion lista ejecutada "+this.sesion_iniciada)
              console.log("estado de sesion "+estadoDeSesion)
              return this.sesion_iniciada
            }
           )
    }

    listarPerros(){
        this.CrudService.getPerros().subscribe(
            res=>{
                //console.log(res)
                this.ListarPerro=<any>res;
            },
            err => console.log(err)
          );
    }

    /*listarPerros(){
      this.CrudService.getPerros().subscribe(
        {
          next:res=>{
            console.log(res)
            this.ListarPerro=<any>res;
        },
        error:err => {console.log(err)}
      } 
          
          
        )
  }
    */

    eliminar(id:string)
  {
    this.CrudService.deletePerro(id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarPerros();
        console.log(id)
      },
      err=> console.log(err)
      );
  }

  modificar(nombre_perro:string){
    console.log("algo"+nombre_perro)
    this.router.navigate(['/modificar_perro/'+nombre_perro]);
  }

  ver(nombre_perro:string){
    console.log("algo"+nombre_perro)
    this.router.navigate([nombre_perro]);
  }
}
