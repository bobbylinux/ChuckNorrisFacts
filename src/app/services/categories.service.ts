import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service';

@Injectable()
export class CategoriesService extends DataService {

  constructor(http: Http) {
    super("http://api.icndb.com/categories",http);
  }
}
