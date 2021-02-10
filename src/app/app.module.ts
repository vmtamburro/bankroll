import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AllocationComponent } from './allocation/allocation.component';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PayrollComponent } from './payroll/payroll.component';
import { CounselingComponent } from './counseling/counseling.component';
import { FormsModule} from '@angular/forms'
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DatePipe } from '@angular/common';
import { DecimalPipe } from '@angular/common';


const routes: Routes = [
  { path: 'analytics', component: AnalyticsComponent },
  { path: 'allocation', component: AllocationComponent },
  { path: 'home', component: HomeComponent },
  { path: 'counseling', component: CounselingComponent },
  { path: 'payroll', component: PayrollComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    AnalyticsComponent,
    AllocationComponent,
    HomeComponent,
    PayrollComponent,
    CounselingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
