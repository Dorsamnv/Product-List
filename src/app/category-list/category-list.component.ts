import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Category } from '../models/Category';
import { CategoryService } from '../serivces/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{
  categoryList:Category[]=[]

  categoryListWithService:Category[]=[]

  constructor(private http:HttpClient, private categoryService:CategoryService){}
  
  ngOnInit(): void {
    const apiUrl = "https://dummyjson.com/products/categories"
    this.http.get<Category[]>(apiUrl).subscribe(result => this.categoryList = result)

    this.categoryService.getAll().subscribe(data => this.categoryListWithService = data)
  }
}
