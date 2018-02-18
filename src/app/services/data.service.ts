import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { NotFoundError } from './../common/not-found.error';
import { BadRequestError } from './../common/bad-request.error';
import { AppError } from '../common/app-error';
import { ErrorHandler } from '@angular/core';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  
  params = "?escape=javascript";

  constructor(private url: string, private http: Http) { 
  }

  getAll(filters?:string[]) {
    let url: string;

    if (filters && filters.length > 0) {
      url = this.url+"?limitTo=["+filters+"]";
    } else {
      url = this.url+this.params;
    }
    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  get(id) {
    return this.http.get(this.url + "/" + id + this.params )
      .map(response => response.json())
      .catch(this.handleError);
  }
  //gestione degli errori
  private handleError(error: Response) {

    console.log(error);

    switch (error.status) {
      case 404:
        return Observable.throw(new NotFoundError(error));
      case 400:
        return Observable.throw(new BadRequestError(error));
      default:
        return Observable.throw(new AppError(error));
    }
  }

}