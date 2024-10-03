import { Routes } from '@angular/router';
import { LoginComponent } from './sharedcomponent/login/login.component';
import { SellerdashboardComponent } from './component/seller/sellerdashboard/sellerdashboard.component';
import { CustomerdashboardComponent } from './component/customer/customerdashboard/customerdashboard.component';
import { WishlistedCarsComponent } from './component/customer/wishlisted-cars/wishlisted-cars.component';
import { MyPurchaseComponent } from './component/customer/my-purchase/my-purchase.component';
import { RentalHistoryComponent } from './component/customer/rental-history/rental-history.component';
import { ProfileSettingsComponent } from './component/customer/profile-settings/profile-settings.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { HomeComponent } from './component/landing-page/home/home.component';
import { AboutComponent } from './component/landing-page/about/about.component';
import { MembershipComponent } from './component/seller/membership/membership.component';

export const routes: Routes = [
    {
        "path":"",component:LandingPageComponent
    },
    {
        "path":"home",component:HomeComponent
    },
    {
        "path":"about",component:AboutComponent
    },
    {
        "path":"login",component: LoginComponent
    },
    {
        "path":"seller/dashboard",component:SellerdashboardComponent
    },
    {
        "path":"addmembership",component:MembershipComponent
    },
    {
        "path":"customer/dashboard",component:CustomerdashboardComponent
    },
    {
        "path":"customer/wishlisted-cars",component:WishlistedCarsComponent
    },
    {
        "path":"customer/my-purchase",component:MyPurchaseComponent
    },
    {
        "path":"customer/rental-history",component:RentalHistoryComponent
    },
    {
        "path":"customer/profile-settings",component:ProfileSettingsComponent
    }


];
