import { TestBed } from '@angular/core/testing';

import { ServicioOperadorService } from './servicio-operador.service';

describe('ServicioOperadorService', () => {
  let service: ServicioOperadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioOperadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
