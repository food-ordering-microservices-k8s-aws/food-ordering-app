import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { API_URL_Order } from "src/app/constants/url";
import { OrderDTO } from "../model/OrderDTO";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class OrderService {

  private apiUrl = API_URL_Order+'/order/save';

  constructor(private http: HttpClient) { }

 httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'text/plain',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };

  saveOrder(data: any):Observable<any>  {
    return this.http.post<OrderDTO>(this.apiUrl, data);
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }


}