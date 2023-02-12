import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OliviaComponent } from './olivia.component';

describe('OliviaComponent', () => {
  let component: OliviaComponent;
  let fixture: ComponentFixture<OliviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OliviaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OliviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
