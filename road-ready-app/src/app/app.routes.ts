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
import { SignUpComponent } from './component/customer/usedcars/sign-up/sign-up.component';
import { SingleRentalCarComponent } from './component/customer/rentalcars/single-rental-car/single-rental-car.component';
import { BookingComponent } from './component/customer/rentalcars/booking/booking.component';

import { UsedcarComponent } from './component/seller/usedcar/usedcar.component';
import { OnboardComponent } from './component/usedcaradd/onboard/onboard.component';
import { ModelComponent } from './component/usedcaradd/model/model.component';
import { BookinspectionComponent } from './component/seller/bookinspection/bookinspection.component';
import { SelectlocationComponent } from './component/seller/selectlocation/selectlocation.component';
import { CheckingpriceComponent } from './component/seller/checkingprice/checkingprice.component';
import { UsedcardetailsComponent } from './component/usedcaradd/usedcardetails/usedcardetails.component';
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
    },
  {
    path: 'customer/dashboard',
    component: CustomerdashboardComponent,
    children: [
      {
        path: 'rentalcars',
        component: RentalcarsComponent,
        pathMatch:'full'
      },
      {
        path:"single-car/:scid", component:SingleRentalCarComponent
      }
    ],
  },
  {
    path: 'customer/wishlisted-cars',
    component: WishlistedCarsComponent,
  },
  {
    path: 'customer/my-purchase',
    component: MyPurchaseComponent,
  },
  {
    path: 'customer/rental-history',
    component: RentalHistoryComponent,
  },
  {
    path: 'customer/profile-settings',
    component: ProfileSettingsComponent,
  },
//   {
//     path: 'customer/rentalcars',
//     component: RentalcarsComponent,
//   },
  {
    path: 'customer/rentalcars/single-rental-car',
    component: SingleRentalCarComponent,
  },
  {
    path: 'customer/rentalcars/booking',
    component: BookingComponent,
  },
  {
    path: 'customer/usedcars',
    component: UsedcarsComponent,
  },
  {
    path: 'usedcars/view-more-details',
    component: ViewMoreDetailsComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: 'usedcars/purchase',
    component: PurchaseComponent,
  },

];
