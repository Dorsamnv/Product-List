import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    // Initialize products in ngOnInit
    this.products = [
      {id: 1, title: 'Product A'},
      {id: 2, title: 'Product B'},
      {id: 3, title: 'Product C'}
    ];
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
