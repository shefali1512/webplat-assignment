import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImageGridComponent } from './image-grid/image-grid.component';

const routes: Routes = [
  {
    path :'',
    component : ImageGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImagesRoutingModule { }
