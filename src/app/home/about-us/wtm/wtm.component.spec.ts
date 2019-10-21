import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtmComponent } from './wtm.component';

describe('WtmComponent', () => {
  let component: WtmComponent;
  let fixture: ComponentFixture<WtmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WtmComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
