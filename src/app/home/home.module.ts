import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { PartnersComponent } from './partners/partners.component';
import { PartnerService } from './partners/partner.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, BannerComponent, PartnersComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
  providers: [PartnerService]
})
export class HomeModule {}
