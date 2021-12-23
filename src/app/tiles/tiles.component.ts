import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
      {"image": "/assets/fruit.png", "title": "Fruit Custard", "brief": "Fruit custard is one of those desserts that reminds me of childhood. "},
      {"image": "/assets/paneer.png", "title": "Paneer Butter Masala", "brief": "Paneer Butter Masala is one of India’s most popular paneer gravy recipe. "},
      {"image": "/assets/bread.png", "title": "Banana Bread", "brief": "Banana bread is an all-time personal family favorite. When I find myself pressed for time, which happens often."}
    ]
    this.receipeList = this.obj;
  }

  ngOnInit(): void {
  }

  customOptions: OwlOptions  = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }



}
