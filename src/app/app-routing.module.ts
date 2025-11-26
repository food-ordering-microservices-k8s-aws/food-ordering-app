import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'restaurant-catalog', pathMatch: 'full' },
  {
    path: 'food-inventory',
    loadChildren: () => import('./food-inventory/food-inventory.module')
      .then(m => m.FoodInventoryModule)
  },
  {
    path: 'order-summary',
    loadChildren: () => import('./order-summary/order-summary.module')
      .then(m => m.OrderSummaryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
