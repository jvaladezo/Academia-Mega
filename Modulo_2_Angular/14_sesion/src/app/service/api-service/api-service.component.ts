import {  Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {  Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ApiServiceComponent {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor (private http:HttpClient){}
    getProduct(): Observable<any>{
      return this.http.get(this.apiUrl);
    }
  

}
