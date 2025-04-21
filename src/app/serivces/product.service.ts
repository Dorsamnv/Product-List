import { Injectable, model } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products: Product[]= [
  new Product(101,"Laptop"),
  new Product(102,"Mobile"),
  new Product(103,"Tablet"),
  new Product(104,"Tv")
 ]
  constructor() { }
  getAll():Product[]{
    return this.products
  }

  get(id:number):void{
   this.products.find(q => q.id == id)
  }
  add(model:Product):void{
    this.products.push(model)
  }
  edit(model:Product):void{
    const index = this.products.findIndex(q => q.id == model.id)
    this.products[index] = model
  }
  remove(id:number):void{
    const index = this.products.filter(q => q.id !== id)
  }
}
