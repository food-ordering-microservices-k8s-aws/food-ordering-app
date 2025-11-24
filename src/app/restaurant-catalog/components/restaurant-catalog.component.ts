import { Component } from '@angular/core';
import { Restaurant } from 'src/app/shared/models/restaurant';
import { RestaurantCatelogService } from '../service/restaurant-catelog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-catalog',
  templateUrl: './restaurant-catalog.component.html',
  styleUrls: ['./restaurant-catalog.component.css']
})

export class RestaurantCatalogComponent {
  public restauranCatalogList: Restaurant[];

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(private router: Router, 
    private restaurantCatalogService: RestaurantCatelogService) { }

  getAllRestaurants() {
    this.restaurantCatalogService.getAllRestaurants().subscribe(
      data => {
        this.restauranCatalogList = data;
      }
    )
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  getRandomImage(): string {
    const imageCount = 8; // Adjust this number based on the number of images in your asset folder
    const randomIndex = this.getRandomNumber(1, imageCount);
    return `${randomIndex}.jpg`; // Replace with your image filename pattern
  }

  onButtonClick(id: number) {
    this.router.navigate(['/food-catalogue', id]);
  }
}
