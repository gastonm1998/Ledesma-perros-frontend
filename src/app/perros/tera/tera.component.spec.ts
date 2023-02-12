import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeraComponent } from './tera.component';

describe('TeraComponent', () => {
  let component: TeraComponent;
  let fixture: ComponentFixture<TeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
