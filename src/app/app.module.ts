import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { RegistrationComponent } from './Registration/Registration.component';
import { LoginComponent } from './Login/Login.component';
//import { FlashComponent } from './Flash/Flash.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
//import { ObservableComponent } from './observale/observale.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuComponent } from './Menu/Menu.component';
import { FlassMessageComponent } from './FlassMessage/FlassMessage.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { ExampleComponent } from './Example/Example.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [																																
    AppComponent,
      HomeComponent,
      RegistrationComponent,
      LoginComponent,
      MenuComponent,
      FlassMessageComponent,
      HeaderComponent,
      FooterComponent,
      ExampleComponent,
      CheckBalanceComponent,
      AccountopenComponent,
      CheckedBalanceComponent,
      PhoneNumberChangeComponent,
      CheckBookRequestComponent,
      ChangePasswordComponent,
      AddressChangeComponent,
      AccountApplicationComponent,
      CheckBookedComponent,
      MyaccountComponent,
      AccountinformationComponent,
      Accountinfo1Component,
      HouseComponent,
      AdminLoginComponent,
      AdminMenuComponent,
      CheckbookapplicationComponent,
      LoanapplicationComponent,
      ApplicationaccountComponent,
     
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//import { HttpClientModule } from '@angular/common/http';
import { CheckBalanceComponent } from './CheckBalance/CheckBalance.component';
import { AccountopenComponent } from './Accountopen/Accountopen.component';
import { CheckedBalanceComponent } from './CheckedBalance/CheckedBalance.component';
import { PhoneNumberChangeComponent } from './PhoneNumberChange/PhoneNumberChange.component';
import { CheckBookRequestComponent } from './CheckBookRequest/CheckBookRequest.component';
import { ChangePasswordComponent } from './ChangePassword/ChangePassword.component';
import { AddressChangeComponent } from './AddressChange/AddressChange.component';
import { AccountApplicationComponent } from './AccountApplication/AccountApplication.component';
import { CheckBookedComponent } from './CheckBooked/CheckBooked.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AccountinformationComponent } from './accountinformation/accountinformation.component';
import { Accountinfo1Component } from './accountinfo1/accountinfo1.component';
import { HouseComponent } from './house/house.component';
import { AdminLoginComponent } from './adminLogin/adminLogin.component';
import { AdminMenuComponent } from './adminMenu/adminMenu.component';
//import { AccountapplicationComponent } from './accountapplication/accountapplication.component';
import { CheckbookapplicationComponent } from './Checkbookapplication/Checkbookapplication.component';
import { LoanapplicationComponent } from './loanapplication/loanapplication.component';
import { AccapplyService } from './applicationaccount/accapply.service';
import { BalanceService } from './CheckedBalance/balance.service';
import { ApplicationaccountComponent } from './applicationaccount/applicationaccount.component';
//import { AdaccountComponent } from './Adaccount/Adaccount.component';





