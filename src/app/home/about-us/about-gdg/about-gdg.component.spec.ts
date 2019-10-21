import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGdgComponent } from './about-gdg.component';

describe('GdgComponent', () => {
  let component: AboutGdgComponent;
  let fixture: ComponentFixture<AboutGdgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutGdgComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGdgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
