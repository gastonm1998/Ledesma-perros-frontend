import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaraComponent } from './wara.component';

describe('WaraComponent', () => {
  let component: WaraComponent;
  let fixture: ComponentFixture<WaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
