import { ProductDetails } from './product-details';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAllTests():ProductDetails[]
  {
    let laserTest:ProductDetails={
      testName:'LaserTest-1',
      testCost:5000,
      rating:4,
      description:'test for laser treatment of eye',
      image:"/assets/laser.jpg"
    }

    let BVTest:ProductDetails={
      testName:'Basic Vision Test',
      testCost:2500,
      rating:3,
      description:'test for  visual acuity test',
      image:"/assets/BV.jpg"
    }

    let LTest:ProductDetails={
      testName:'LaserTest-2',
      testCost:10000,
      rating:4,
      description:'test for laser treatment of eye',
      image:"/assets/laser.jpg"
    }

    return [laserTest,BVTest,LTest];
  }
}
