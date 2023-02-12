import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockeraComponent } from './rockera.component';

describe('RockeraComponent', () => {
  let component: RockeraComponent;
  let fixture: ComponentFixture<RockeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockeraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
