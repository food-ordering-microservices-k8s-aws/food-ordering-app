import { FoodInventory } from "../../shared/models/FoodInventory";
import { Restaurant } from "../../shared/models/Restaurant";

export interface OrderDTO{

    foodInventoryList?: FoodInventory[];
    user?: number;
    restaurant?: Restaurant;
}
