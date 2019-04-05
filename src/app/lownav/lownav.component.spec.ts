import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LownavComponent } from './lownav.component';

describe('LownavComponent', () => {
  let component: LownavComponent;
  let fixture: ComponentFixture<LownavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LownavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LownavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
