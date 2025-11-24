import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantCatalogComponent } from './components/restaurant-catalog.component';

const routes: Routes = [
  {path: '', component: RestaurantCatalogComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantCatalogRoutingModule { }
