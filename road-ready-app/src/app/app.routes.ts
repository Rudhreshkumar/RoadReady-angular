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
import { RentalcarsComponent } from './component/customer/rentalcars/rentalcars.component';
import { UsedcarsComponent } from './component/customer/usedcars/usedcars.component';
import { ViewMoreDetailsComponent } from './component/customer/usedcars/view-more-details/view-more-details.component';
import { PurchaseComponent } from './component/customer/usedcars/purchase/purchase.component';
import { SingleRentalCarComponent } from './component/customer/rentalcars/single-rental-car/single-rental-car.component';
import { BookingComponent } from './component/customer/rentalcars/booking/booking.component';
import { SignupComponent } from './component/customer/usedcars/signup/signup.component';
import { MyactivityComponent } from './component/customer/myactivity/myactivity.component';
import { ProfileComponent } from './component/customer/profile/profile.component';



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
        "path":"customer/dashboard",component:CustomerdashboardComponent
    },
    {
        "path":"customer/wishlisted-cars",component:WishlistedCarsComponent
    },
    {
        "path":"customer/my-purchase",component:MyPurchaseComponent
    },
    {
        "path":"customer/my-activity",component:MyactivityComponent
    },
    {
        "path":"customer/rental-history",component:RentalHistoryComponent
    },
    {
        "path":"customer/profile",component:ProfileComponent
    },
    {
        "path":"customer/profile-settings",component:ProfileSettingsComponent
    },
    {
        "path":"customer/rentalcars",component:RentalcarsComponent
    },
    {
        "path":"customer/rentalcars/single-rental-car",component:SingleRentalCarComponent
    },
    {
        "path":"customer/rentalcars/booking",component:BookingComponent
    },
    {
        "path":"customer/usedcars",component:UsedcarsComponent
    },
    {
        "path":"usedcars/view-more-details/:id",component:ViewMoreDetailsComponent
    },
    {
        "path":"signup",component:SignupComponent
    },
    {
        "path":"usedcars/purchase/:id",component:PurchaseComponent
    }
];
