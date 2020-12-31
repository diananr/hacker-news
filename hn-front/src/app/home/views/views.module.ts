import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { HomeViewComponent } from './home-view/home-view.component';
import { ViewsComponent } from './views.component';


@NgModule({
  declarations: [
    ViewsComponent,
    HomeViewComponent,
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
