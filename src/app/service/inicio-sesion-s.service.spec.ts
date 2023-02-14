import { TestBed } from '@angular/core/testing';

import { InicioSesionSService } from './inicio-sesion-s.service';

describe('InicioSesionSService', () => {
  let service: InicioSesionSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioSesionSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
