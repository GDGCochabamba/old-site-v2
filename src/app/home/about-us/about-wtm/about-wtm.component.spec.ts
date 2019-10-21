import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutWtmComponent } from './about-wtm.component';

describe('WtmComponent', () => {
  let component: AboutWtmComponent;
  let fixture: ComponentFixture<AboutWtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutWtmComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutWtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
