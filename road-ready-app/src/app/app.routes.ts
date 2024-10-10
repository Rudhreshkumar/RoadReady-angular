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

import { UsedcarComponent } from './component/seller/usedcar/usedcar.component';
import { OnboardComponent } from './component/usedcaradd/onboard/onboard.component';
import { ModelComponent } from './component/usedcaradd/model/model.component';
import { BookinspectionComponent } from './component/seller/bookinspection/bookinspection.component';
import { SelectlocationComponent } from './component/seller/selectlocation/selectlocation.component';
import { CheckingpriceComponent } from './component/seller/checkingprice/checkingprice.component';
import { UsedcardetailsComponent } from './component/usedcaradd/usedcardetails/usedcardetails.component';

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
        "path":"usedcar/add",component:OnboardComponent
    },
   // {
      //  "path": 'model/:modelId', component: ModelComponent
  //  },
    {
        "path":'bookinspectionpage',component:BookinspectionComponent
    },
    {
        "path":"selectlocation",component:SelectlocationComponent
    },
    {
        "path":"addmembership",component:MembershipComponent
    },
    {
        "path":"checkprice",component:CheckingpriceComponent
    },
   /* {
        "path":"usedcaradd/:modelId",component:UsedcardetailsComponent
    },*/
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
