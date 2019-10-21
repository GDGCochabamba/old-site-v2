import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { GdgComponent } from './gdg/gdg.component';
import { WtmComponent } from './wtm/wtm.component';

@NgModule({
  declarations: [AboutUsComponent, GdgComponent, WtmComponent],
  imports: [CommonModule],
  exports: [AboutUsComponent]
})
export class AboutUsModule {}
