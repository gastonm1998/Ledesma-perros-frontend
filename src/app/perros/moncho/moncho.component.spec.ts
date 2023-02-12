import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonchoComponent } from './moncho.component';

describe('MonchoComponent', () => {
  let component: MonchoComponent;
  let fixture: ComponentFixture<MonchoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonchoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonchoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
