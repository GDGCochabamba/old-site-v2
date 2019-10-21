import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { AboutUsModule } from './about-us/about-us.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerService } from './partners/partner.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const partnerServiceMock = {
    getAll: () => of([])
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, BannerComponent, PartnersComponent],
      imports: [AboutUsModule],
      providers: [{ provide: PartnerService, useValue: partnerServiceMock }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
