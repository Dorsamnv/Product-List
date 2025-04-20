import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { CommonModule } from '@angular/common';
import { RouterModule ,Router} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css'
})
export class ProductInfoComponent implements OnInit {
  productId: number = 0;
  title: string = '';

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Check if we're on the info route
    const isInfoRoute = this.router.url.includes('/info');
    console.log('Current URL:', this.router.url);
    
    if (isInfoRoute) {
      // Handle query parameters for /products/info route
      this.route.queryParamMap.subscribe(params => {
        const id = params.get('id');
        this.title = params.get('title') || '';
        console.log('Query Params - Title:', this.title);
        
        if (id) {
          const numId = Number(id);
          if (!isNaN(numId)) {
            this.productId = numId;
          } else {
            console.error('Query ID is not a valid number:', id);
            this.productId = 0;
          }
        }
      });
    } else {
      // Handle route parameters for /products/:id route
      this.route.paramMap.subscribe(params => {
        const id = params.get('id');
        console.log('Route Params - ID:', id);
        
        // Also get query parameters for title
        this.route.queryParamMap.subscribe(queryParams => {
          this.title = queryParams.get('title') || '';
          console.log('Query Params - Title:', this.title);
        });
        
        if (id) {
          const numId = Number(id);
          if (!isNaN(numId)) {
            this.productId = numId;
          } else {
            console.error('Route ID is not a valid number:', id);
            this.productId = 0;
          }
        }
      });
    }
  }

  goBack(): void {
    console.log('goBack method called');
    this.location.back();
  }
}

