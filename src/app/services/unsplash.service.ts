import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UnsplashService {
  applicationId:string = 'b9f2928a32f4072a9b4297d846fa27431c8a728e69c94e3372daa00968d04f0a';
  url:string = 'https://api.unsplash.com/photos/random/?client_id=b9f2928a32f4072a9b4297d846fa27431c8a728e69c94e3372daa00968d04f0a';

  constructor(public http:Http) { }

  getRandomPhoto(){
    return this.http.get(this.url).map(res => res.json());
  }

}
