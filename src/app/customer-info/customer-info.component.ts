import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomerAddressComponent } from '../customer-address/customer-address.component';
@Component({
  selector: 'app-customer-info',
  imports: [CommonModule, FormsModule,CustomerAddressComponent],
  templateUrl: './customer-info.component.html',
  styleUrl: './customer-info.component.css'
})
export class CustomerInfoComponent {
 @ViewChild('firstName') firstName:any;
 @ViewChild('lastName') lastName:any;
 @ViewChild('homeAddress') homeAddress:any= CustomerAddressComponent;

 save(): void{
   alert('First Name : ' + this.firstName.nativeElement.value +'  ' +'Last Name : ' + this.lastName.nativeElement.value+'   '+ 'Home Address : ' + this.homeAddress.address )

 }

}
