import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
        NavbarComponent,
        ChartComponent
  ],
  exports: [
        NavbarComponent,
        ChartComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxChartsModule
  ]
})
export class ComponentsModule { }
