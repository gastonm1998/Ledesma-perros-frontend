import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmixComponent } from './omix.component';

describe('OmixComponent', () => {
  let component: OmixComponent;
  let fixture: ComponentFixture<OmixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
