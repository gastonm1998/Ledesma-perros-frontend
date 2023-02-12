import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObenixComponent } from './obenix.component';

describe('ObenixComponent', () => {
  let component: ObenixComponent;
  let fixture: ComponentFixture<ObenixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObenixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObenixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
