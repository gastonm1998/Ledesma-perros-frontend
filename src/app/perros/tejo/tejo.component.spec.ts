import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TejoComponent } from './tejo.component';

describe('TejoComponent', () => {
  let component: TejoComponent;
  let fixture: ComponentFixture<TejoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TejoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TejoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
