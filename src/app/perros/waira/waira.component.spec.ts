import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WairaComponent } from './waira.component';

describe('WairaComponent', () => {
  let component: WairaComponent;
  let fixture: ComponentFixture<WairaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WairaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WairaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
