import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { ProductService } from '../serivces/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  // products: any[] = [
  //   {id: 1, title: 'Product A'},
  //   {id: 2, title: 'Product B'},
  //   {id: 3, title: 'Product C'}
  // ];
  products:Product[]=[]
  
  constructor(private router: Router, private productService: ProductService) {}
  
  ngOnInit(): void {
   this.products = this.productService.getAll()
  }
  
 removeProduct(id:number){
  this.products = this.products.filter(p => p.id !== id)
 }

  goToProductInfo(item: any): void {
    this.router.navigate(['/products', item.id], {
      queryParams: {
        title: item.title
      }
    });
  }
}
