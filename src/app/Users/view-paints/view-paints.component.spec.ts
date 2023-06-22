import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaintsComponent } from './view-paints.component';

describe('ViewPaintsComponent', () => {
  let component: ViewPaintsComponent;
  let fixture: ComponentFixture<ViewPaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
