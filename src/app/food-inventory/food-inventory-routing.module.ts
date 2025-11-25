import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FoodInventoryComponent} from "./components/food-inventory.component";

const routes: Routes = [
  { path: ':id', component: FoodInventoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodInventoryRoutingModule { }
