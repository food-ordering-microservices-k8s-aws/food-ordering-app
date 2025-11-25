import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_URL_Food_Inventory } from 'src/app/constants/url';
import { FoodInventoryPage } from '../../shared/models/FoodInventoryPage';


@Injectable({
    providedIn: 'root'
})
export class FoodInventoryService {

    private apiUrl = API_URL_Food_Inventory +'/foodInventory/findRestaurantAndFoodInventoryById/';

    constructor(private http: HttpClient) { }

    getFoodInventoryByRestaurant(id:number): Observable<any> {
        return this.http.get<FoodInventoryPage>(`${this.apiUrl+id}`)
          .pipe(
            catchError(this.handleError)
          );
      }

      private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error.message || error);
      }

}
