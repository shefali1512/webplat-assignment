import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTable } from '@angular/material/table';
import { map, of } from 'rxjs';
import { ImagesService } from 'src/app/services/images.service';


export interface SelectedImages {
  image: number,
  title: string
}

const ELEMENT_DATA: SelectedImages[] = [
];

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit {

  @ViewChild(MatTable)
  table!: MatTable<SelectedImages>;

  imageList: any;
  displayedColumns: string[] = ['image', 'title'];
  dataSource = [...ELEMENT_DATA];

  constructor(
    private imageService: ImagesService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getImageList();
  }

  getImageList() {
    this.imageService.getListOfImages().subscribe((result: any) => {
      this.imageList = result;
    });
  }
  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  addImage(data: any) {
    let tempData = {
      image: data.image,
      title: data.title,
      id: data.id
    }
    this.dataSource.push(tempData);
    this.table?.renderRows();
    this.imageList.forEach((imageData: any) => {
      if (imageData.id == data.id) {
        imageData["isSelected"] = true;
      }
    });

    this.openSnackBar("Image has been added successfully! Check the table below.");
  
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, "", { duration: 2000 });
  }

  removeData(data: any) {
    this.dataSource = this.dataSource.filter((item: any) => item.id !== data.id);
    this.table?.renderRows();
    this.imageList.forEach((imageData: any) => {
      if (imageData.id == data.id) {
        imageData["isSelected"] = false;
      }
    });
    this.openSnackBar("Image has been removed successfully! Check the table below.");

  }

}
