import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BootstrapOptions } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
   })
export class AppComponent implements OnInit {
  title = 'projects-2';

  ngOnInit() {
    console.log('AppComponent initialized');
  }
}
