import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { RestaurantCatalogRoutingModule } from './restaurant-catalog-routing.module';
import { RestaurantCatalogComponent } from './components/restaurant-catalog.component';


@NgModule({
  declarations: [
    RestaurantCatalogComponent
  ],
  imports: [
    CommonModule,
    RestaurantCatalogRoutingModule,
    NgOptimizedImage
  ]
})
export class RestaurantCatalogModule { }
