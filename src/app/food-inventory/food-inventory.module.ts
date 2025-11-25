import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodInventoryRoutingModule } from './food-inventory-routing.module';
import { FoodInventoryComponent } from './components/food-inventory.component';


@NgModule({
  declarations: [
    FoodInventoryComponent
  ],
  imports: [
    CommonModule,
    FoodInventoryRoutingModule
  ]
})
export class FoodInventoryModule { }
