import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UserDetailComponent } from './user-detail.component';
import { UsersService } from '../service/users.service';

class MockUsersService {
  list() {return [{name: "name", id: 3}];}
  getUser(id: number) {return {name: "name", id: 3}}
}
let myService = new MockUsersService();

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ UserDetailComponent ],
      providers: [{provide: UsersService, useValue: myService}, UsersService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
