/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsersService } from './users.service';
class MockUsersService {
  list() {return [{name: "name", id: 3}];}
  getUser(id: number) {return {name: "name", id: 3}}
}
let myService = new MockUsersService();

describe('UsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: UsersService, useValue: myService}, UsersService]
    });
  
  });

  it('list() should return list of Users', () => {
    const users = myService.list();
    expect(users.length).toBe(1);
  });
  
  it('getUser(3) should return one user', () => {
    const user = myService.getUser(3);
    expect(user.id).toEqual(3);
  });
});
