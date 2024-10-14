import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookComponent,NavbarComponent,NgFor,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
