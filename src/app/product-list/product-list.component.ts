import { Component, OnInit, Query } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { QueryParamsHandling } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgFor, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  
  products=[{id:1, title: 'Product A'},{id:2, title: 'Product B'},{id:3, title: 'Product c'}]

  constructor(private router: Router){}
  ngOnInit(): void {}
  
  goToProductInfo(item: any): void {
    this.router.navigate(['/products', item.id], {
      queryParams: {
        title: item.title
      }
    });
  }
}
