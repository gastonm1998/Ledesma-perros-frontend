import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeridioComponent } from './meridio.component';

describe('MeridioComponent', () => {
  let component: MeridioComponent;
  let fixture: ComponentFixture<MeridioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeridioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeridioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
