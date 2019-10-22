import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParallaxDirective } from './directives/parallax/parallax.directive';
import { TransparentNavbarDirective } from './directives/transparent-navbar/transparent-navbar.directive';
import { ScrollSpyDirective } from './directives/scroll-spy/scroll-spy.directive';

@NgModule({
  declarations: [
    ParallaxDirective,
    TransparentNavbarDirective,
    ScrollSpyDirective
  ],
  imports: [CommonModule],
  exports: [ParallaxDirective, TransparentNavbarDirective, ScrollSpyDirective]
})
export class SharedModule {}
