import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerfasianoComponent } from './verfasiano.component';

describe('VerfasianoComponent', () => {
  let component: VerfasianoComponent;
  let fixture: ComponentFixture<VerfasianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerfasianoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerfasianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
