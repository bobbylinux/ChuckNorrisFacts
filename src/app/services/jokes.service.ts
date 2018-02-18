import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '@angular/http';

@Injectable()
export class JokesService extends DataService {

  constructor(http: Http) {
    super("http://api.icndb.com/jokes",http);
  }
  
}
