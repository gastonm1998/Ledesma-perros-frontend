import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AteneaComponent } from './atenea.component';

describe('AteneaComponent', () => {
  let component: AteneaComponent;
  let fixture: ComponentFixture<AteneaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AteneaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AteneaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
