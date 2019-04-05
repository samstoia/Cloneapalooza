import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidnavComponent } from './midnav.component';

describe('MidnavComponent', () => {
  let component: MidnavComponent;
  let fixture: ComponentFixture<MidnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
