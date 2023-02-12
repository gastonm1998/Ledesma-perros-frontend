import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SargentaComponent } from './sargenta.component';

describe('SargentaComponent', () => {
  let component: SargentaComponent;
  let fixture: ComponentFixture<SargentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SargentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SargentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
