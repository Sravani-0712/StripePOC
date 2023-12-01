import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecckoutComponent } from './checckout.component';

describe('ChecckoutComponent', () => {
  let component: ChecckoutComponent;
  let fixture: ComponentFixture<ChecckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
