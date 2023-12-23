import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  foods:Food[] = [];
  
  constructor(private foodservice:FoodService, private route:ActivatedRoute){}
 
  ngOnInit(): void{

    this.route.params.subscribe(params =>{
      if(params['searchTerm'])
      this.foods = this.foodservice.getAllFoodsBySearchTerm(params['searchTerm']);
      else if(params['tag'])
      this.foods = this.foodservice.getAllFoosByTag(params['tag']);
      else
        this.foods = this.foodservice.getAll();
    })
  }
}
