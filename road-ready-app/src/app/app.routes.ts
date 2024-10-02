import { Routes } from '@angular/router';
import { LoginComponent } from './sharedcomponent/login/login.component';
import { SellerdashboardComponent } from './component/seller/sellerdashboard/sellerdashboard.component';
import { CustomerdashboardComponent } from './component/customer/customerdashboard/customerdashboard.component';
import { WishlistedCarsComponent } from './component/customer/wishlisted-cars/wishlisted-cars.component';

export const routes: Routes = [

    {
        "path":"",component: LoginComponent
    },
    {
        "path":"seller/dashboard",component:SellerdashboardComponent
    },
    {
        "path":"customer/dashboard",component:CustomerdashboardComponent
    },
    {
        "path":"customer/wishlisted-cars",component:WishlistedCarsComponent
    }


];
