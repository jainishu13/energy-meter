import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RegisterService {

  constructor(private _http:Http) {
  }

  register(body){
   return this._http.post('http://localhost:3000/users/register',body)
          .map(res => res.json());

  }

 
}
