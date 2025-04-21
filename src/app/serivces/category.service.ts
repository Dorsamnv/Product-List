import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly apiUrl = `${environment.apiUrl}/products/categories`

  constructor(private http:HttpClient) { }
  getAll():Observable<Category[]>{
    return this.http.get<Category[]>(this.apiUrl)

  }
}
