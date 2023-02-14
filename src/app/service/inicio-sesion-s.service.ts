import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionSService {
  prueba
  estadoDeSesion: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }
}
