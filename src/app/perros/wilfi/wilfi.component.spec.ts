import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WilfiComponent } from './wilfi.component';

describe('WilfiComponent', () => {
  let component: WilfiComponent;
  let fixture: ComponentFixture<WilfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WilfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WilfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
