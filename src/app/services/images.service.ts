import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(
    private httpClient : HttpClient
  ) {}

  getListOfImages(){
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
