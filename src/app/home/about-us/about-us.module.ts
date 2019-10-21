import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { AboutGdgComponent } from './about-gdg/about-gdg.component';
import { AboutWtmComponent } from './about-wtm/about-wtm.component';

@NgModule({
  declarations: [AboutUsComponent, AboutGdgComponent, AboutWtmComponent],
  imports: [CommonModule],
  exports: [AboutUsComponent]
})
export class AboutUsModule {}
