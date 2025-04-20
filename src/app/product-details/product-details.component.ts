import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  @Input() item: any;
  @Output() removeItem = new EventEmitter<number>();
  
  constructor(private router: Router) {}
  
  ngOnInit(): void {}
  
  
  remove(id: number): void {
    this.removeItem.emit(id);
  }
  
  goToProductInfo(item: any): void {
    this.router.navigate(['/products', item.id], {
      queryParams: {
        title: item.title
      }
    });
  }
}
