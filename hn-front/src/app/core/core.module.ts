import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ServicesModule,
  ],
  exports: []
})
export class CoreModule { }
