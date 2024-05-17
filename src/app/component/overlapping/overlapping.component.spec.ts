import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlappingComponent } from './overlapping.component';

describe('OverlappingComponent', () => {
  let component: OverlappingComponent;
  let fixture: ComponentFixture<OverlappingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverlappingComponent]
    });
    fixture = TestBed.createComponent(OverlappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
