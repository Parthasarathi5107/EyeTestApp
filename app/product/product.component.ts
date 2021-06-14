
import { ProductsService } from './../products.service';
import { ProductDetails } from './../product-details';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  __productService:ProductsService;
  tests:number = 0;
  constructor(ps:ProductsService) {
    this.__productService = ps;
   }

  ngOnInit(): void {
  }

getAllTests():ProductDetails[]
{

  return this.__productService.getAllTests();
}

addTest(){
  this.tests++;
  console.log(this.tests);
}

share(){
  console.log("details are Shared");
}
}


