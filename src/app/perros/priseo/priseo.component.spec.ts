import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriseoComponent } from './priseo.component';

describe('PriseoComponent', () => {
  let component: PriseoComponent;
  let fixture: ComponentFixture<PriseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriseoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
