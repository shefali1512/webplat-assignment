import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImagesRoutingModule } from './images-routing.module';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ImageGridComponent
  ],
  imports: [
    CommonModule,
    ImagesRoutingModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
  
})
export class ImagesModule { }
