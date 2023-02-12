import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastaComponent } from './rasta.component';

describe('RastaComponent', () => {
  let component: RastaComponent;
  let fixture: ComponentFixture<RastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RastaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
