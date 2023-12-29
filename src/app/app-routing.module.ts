import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Login/Login.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { MenuComponent } from './Menu/Menu.component';
import { CheckBalanceComponent } from './CheckBalance/CheckBalance.component';
import { PhoneNumberChangeComponent } from './PhoneNumberChange/PhoneNumberChange.component';
import { CheckBookRequestComponent } from './CheckBookRequest/CheckBookRequest.component';
import { ChangePasswordComponent } from './ChangePassword/ChangePassword.component';
import { AccountopenComponent } from './Accountopen/Accountopen.component';
import { AddressChangeComponent } from './AddressChange/AddressChange.component';
import { AccountApplicationComponent } from './AccountApplication/AccountApplication.component';
import { CheckBookedComponent } from './CheckBooked/CheckBooked.component';
import { CheckedBalanceComponent } from './CheckedBalance/CheckedBalance.component';
import { AccountinformationComponent } from './accountinformation/accountinformation.component';
import { Accountinfo1Component } from './accountinfo1/accountinfo1.component';
import { HouseComponent } from './house/house.component';
import { AdminLoginComponent } from './adminLogin/adminLogin.component';
import { AdminMenuComponent } from './adminMenu/adminMenu.component';
import { CheckbookapplicationComponent } from './Checkbookapplication/Checkbookapplication.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { ApplicationaccountComponent } from './applicationaccount/applicationaccount.component';
//import { AdaccountComponent } from './Adaccount/Adaccount.component';

const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'registration', component: RegistrationComponent },
  { path:'menu', component: MenuComponent },
  { path:'checkbalance', component:CheckBalanceComponent },
  { path:'checkedbalance', component:CheckedBalanceComponent },
  { path:'phonenumberchange', component:PhoneNumberChangeComponent },
  { path:'checkbookrequest', component:CheckBookRequestComponent },
  { path:'changepassword', component:ChangePasswordComponent },
  { path:'accountopen', component:AccountopenComponent },
  { path:'addresschange', component:AddressChangeComponent },
  { path:'applyed', component:AccountApplicationComponent },
  { path:'booked', component:CheckBookedComponent},
  { path:'account', component:AccountinformationComponent},
  { path:'accountinfo', component:Accountinfo1Component},
  { path:'loan', component:HouseComponent},
  { path:'accountinfo', component:Accountinfo1Component},
  { path:'admin', component:AdminLoginComponent},
  { path:'adminmenu', component:AdminMenuComponent},
  { path:'accountapplication', component:ApplicationaccountComponent},
  { path:'check', component:CheckbookapplicationComponent},
  { path:'loanapplication', component:LoanapplicationComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
