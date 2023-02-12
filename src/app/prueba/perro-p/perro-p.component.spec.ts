import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerroPComponent } from './perro-p.component';

describe('PerroPComponent', () => {
  let component: PerroPComponent;
  let fixture: ComponentFixture<PerroPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerroPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerroPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
