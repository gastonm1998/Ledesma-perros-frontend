import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuijoteComponent } from './quijote.component';

describe('QuijoteComponent', () => {
  let component: QuijoteComponent;
  let fixture: ComponentFixture<QuijoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuijoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuijoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
