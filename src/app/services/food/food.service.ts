import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():String[]{
  
    return [
      '/assets/images/foods/food-1.jpg',
      '/assets/images/foods/food-2.jpeg',
      '/assets/images/foods/food-3.jpg',
      '/assets/images/foods/food-4.jpg',
      '/assets/images/foods/food-5.jpg',
      '/assets/images/foods/food-6.jpg',
      
    ];
    }
    
  }

