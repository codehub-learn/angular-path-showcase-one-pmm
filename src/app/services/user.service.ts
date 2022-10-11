import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {map, Observable} from "rxjs";
import {User} from "../shared/domain/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }

  get(){
    return this.http.get(this.baseUrl).pipe(map((response: any) => {
      let users: User[] = [];
      response.data.forEach((user: User) => users.push(user));
      return users;
    }));
  }

  getById(id: string): Observable<User>{
    return this.http.get(this.baseUrl + "/" + id).pipe(map((response: any) => {
      return response.data;
    }));
  }

}
