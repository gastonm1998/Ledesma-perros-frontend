import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RudolphComponent } from './rudolph.component';

describe('RudolphComponent', () => {
  let component: RudolphComponent;
  let fixture: ComponentFixture<RudolphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RudolphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RudolphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
