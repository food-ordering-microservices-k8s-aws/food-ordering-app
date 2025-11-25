import { FoodInventory } from "./FoodInventory";
import { Restaurant } from "./Restaurant";

export interface FoodInventoryPage {
    foodInventoryList:FoodInventory[];
    restaurantDTO:Restaurant;
}