import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./sharedcomponent/login/login.component";
import { CustomerdashboardComponent } from './component/customer/customerdashboard/customerdashboard.component';
import { CustomersidebarComponent } from './component/customer/customersidebar/customersidebar.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent,CustomerdashboardComponent,CustomersidebarComponent,LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 // title = 'road-ready-app';
}
