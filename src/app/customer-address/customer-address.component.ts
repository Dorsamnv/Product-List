import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-address',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-address.component.html',
  styleUrl: './customer-address.component.css'
})
export class CustomerAddressComponent {
  address: string = "Tehran ...";
  tel: string= "09123456789";
}
