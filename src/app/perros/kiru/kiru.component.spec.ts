import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KiruComponent } from './kiru.component';

describe('KiruComponent', () => {
  let component: KiruComponent;
  let fixture: ComponentFixture<KiruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KiruComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
