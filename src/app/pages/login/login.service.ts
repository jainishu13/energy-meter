import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class LoginService {

  constructor(private _http:Http) {
  }
  
  login(body){
   return this._http.post('http://localhost:3000/users/login',body)
          .map(res => res.json());

  }
 
}
