import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockyComponent } from './rocky.component';

describe('RockyComponent', () => {
  let component: RockyComponent;
  let fixture: ComponentFixture<RockyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
