import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs'
import { User} from '../model/user';

@Injectable()
export class UsersService {
  public users: Array<User>;

  constructor(private http: Http) { }

  list(): Observable<Array<User>> {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
                    .map(res => res.json())
                    .catch(this.handleError);
  }

  getUser(id: string): Observable<User> {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
                    .flatMap(res => res.json())
                    .find((e: User) => {
                      return e.id.toString() === id
                    })
                    .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
