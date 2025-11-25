import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodInventoryService} from "../service/food-inventory.service";

import { FoodInventoryPage } from '../../shared/models/FoodInventoryPage';
import { FoodInventory } from '../../shared/models/FoodInventory';

@Component({
  selector: 'app-food-inventory',
  templateUrl: './food-inventory.component.html',
  styleUrls: ['./food-inventory.component.css']
})
export class FoodInventoryComponent {

  restaurantId: number;
  foodInventoryResponse!: FoodInventoryPage;
  foodInventoryCart: FoodInventory[] = [];
  orderSummary: FoodInventoryPage;


  constructor(private route: ActivatedRoute, private foodInventoryService: FoodInventoryService, private router: Router) {
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.restaurantId = +id;
      }
    });

    this.getFoodInventorysByRestaurant(this.restaurantId);

  }

  getFoodInventorysByRestaurant(restaurant: number) {
    this.foodInventoryService.getFoodInventoryByRestaurant(restaurant).subscribe(
      data => {
        this.foodInventoryResponse = data;
      }
    )
  }

  increment(food: any) {
    food.quantity++;
    const index = this.foodInventoryCart.findIndex(item => item.id === food.id);
    if (index === -1) {
      // If record does not exist, add it to the array
      this.foodInventoryCart.push(food);
    } else {
      // If record exists, update it in the array
      this.foodInventoryCart[index] = food;
    }
  }

  decrement(food: any) {
    if (food.quantity > 0) {
      food.quantity--;

      const index = this.foodInventoryCart.findIndex(item => item.id === food.id);
      if (this.foodInventoryCart[index].quantity == 0) {
        this.foodInventoryCart.splice(index, 1);
      } else {
        // If record exists, update it in the array
        this.foodInventoryCart[index] = food;
      }

    }
  }

  onCheckOut() {
  }

}
