import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpaintsComponent } from './viewpaints.component';

describe('ViewpaintsComponent', () => {
  let component: ViewpaintsComponent;
  let fixture: ComponentFixture<ViewpaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewpaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
