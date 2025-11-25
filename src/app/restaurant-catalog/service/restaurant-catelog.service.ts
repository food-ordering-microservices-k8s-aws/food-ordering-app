import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { API_URL_Restaurant_Onbording } from "src/app/constants/url";
import { Restaurant } from "src/app/shared/models/Restaurant";

@Injectable({
    providedIn: 'root'
})
export class RestaurantCatelogService {
    private apiUrl = API_URL_Restaurant_Onbording+'/restaurant/getAllRestaurants';
    constructor(private http: HttpClient) { }

    getAllRestaurants(): Observable<any> {
    return this.http.get<Restaurant>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}