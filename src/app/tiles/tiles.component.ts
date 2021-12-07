import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {

  receipeList: any;
  obj:any;
  

  constructor() { 
    this.obj =  [
      {"image": "/assets/fruit.png", "title": "Fruit Custard", "brief": "Fruit custard is one of those desserts that reminds me of childhood. Growing up, we would eat Carrot Halwa, Rice Kheer, Besan Ladoo or a fruit custard like this one for our sweet treat."},
      {"image": "/assets/paneer.png", "title": "Paneer Butter Masala", "brief": "Paneer Butter Masala is one of India’s most popular paneer gravy recipe. This recipe with Indian cottage cheese cubes in a creamy tomato sauce is one that I have been making for a long time."}, 
      {"image": "/assets/bread.png", "title": "Banana Bread", "brief": "Banana bread is an all-time personal family favorite. When I find myself pressed for time, which happens often, I throw this quick recipe together with overripe bananas and other pantry staples."} 
    ]
    this.receipeList = this.obj;
  }

  ngOnInit(): void {
  }


}
