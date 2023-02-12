import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoltroComponent } from './poltro.component';

describe('PoltroComponent', () => {
  let component: PoltroComponent;
  let fixture: ComponentFixture<PoltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
