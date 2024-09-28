import { Routes } from '@angular/router';
import { LoginComponent } from './sharedcomponent/login/login.component';
import { SellerdashboardComponent } from './component/seller/sellerdashboard/sellerdashboard.component';

export const routes: Routes = [
    {
        "path":"",component: LoginComponent
    },
    {
        "path":"seller/dashboard",component:SellerdashboardComponent
    }

];
