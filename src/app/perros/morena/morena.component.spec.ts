import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorenaComponent } from './morena.component';

describe('MorenaComponent', () => {
  let component: MorenaComponent;
  let fixture: ComponentFixture<MorenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
