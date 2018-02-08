import { Injectable } from '@angular/core';
import { MyAPI } from '../data-service/myAPI';
import * as Rx from 'rxjs';
import { TodoItem } from '../data-service/models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';


// export interface IMyApi {
//   GetStuff(): Observable<TodoItem[]>;

// }

@Injectable()
export class BackendApiService {
  service: MyAPI;

  constructor() {
    //this.service = new MyAPI('http://localhost:5000/');
    this.service = new MyAPI('https://awr-todo.azurewebsites.net/');

  }

  GetStuff(): Observable<TodoItem[]> {
    return Observable.fromPromise(this.service.apiTodoGet());
  }

}
