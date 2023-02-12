import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtemisaComponent } from './artemisa.component';

describe('ArtemisaComponent', () => {
  let component: ArtemisaComponent;
  let fixture: ComponentFixture<ArtemisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtemisaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtemisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
