import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdgComponent } from './gdg.component';

describe('GdgComponent', () => {
  let component: GdgComponent;
  let fixture: ComponentFixture<GdgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GdgComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
