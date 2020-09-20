import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppNavigation } from './components/common/navigation/nav.component';
import { AppFooter } from './components/common/footer/footer.component';
import { AppComponent } from './main/app.component';
import { CausesComponent } from './components/causes/causes.component';
import { CauseListComponent } from './components/causes/cause-list/cause-list.component';
import { CauseItemComponent } from './components/causes/cause-list/cause-item/cause-item.component';
import { ContainerComponent } from './components/container/container.component';
import { CauseService } from './services/cause.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateCauseComponent } from './components/causes/create-cause/create-cause.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { InvalidRouteComponent } from './components/common/invalid-route/invalid-route.component';
import { UserComponent } from './components/user/user/user.component';
import { CauseBigDetailsComponent } from './components/causes/cause-big-details/cause-big-details.component';
import { CauseDetailComponent } from './components/causes/cause-detail/cause-detail.component';
import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './components/user/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvalidValidationDirective } from './invalid-validation.directive';
import { ValidValidationDirective } from './valid-validation.directive';
import { PasswordsMatchDirective } from './passwords-match.directive';
import { CauseInterceptor } from './interceptors/interceptor';
import { CookieService } from 'ngx-cookie-service';
import { ProfileCausesComponent } from './components/user/profile/profile-causes/profile-causes.component';
import { ListedCausesComponent } from './components/user/profile/profile-causes/listed-causes/listed-causes.component';
import { ListedItemComponent } from './components/user/profile/profile-causes/listed-causes/listed-item/listed-item.component';
import { MakeDonationComponent } from './components/causes/make-donation/make-donation.component';
import { InvalidAction } from './components/common/invalid-action/invalid-action.component';

const appRoutes = [
  { path: '', pathMatch: "full", component: CausesComponent, },
  { path: 'create-cause', component: CreateCauseComponent, canActivate: [AuthGuard], data: { authReq: true } },
  { path: 'user/login', component: LoginComponent, canActivate: [AuthGuard], data: { authReq: false } },
  { path: 'user/register', component: RegisterComponent, canActivate: [AuthGuard], data: { authReq: false } },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard], data: { authReq: true } },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard], data: { authReq: false } },
  { path: 'cause/:id', component: CauseBigDetailsComponent, canActivate: [AuthGuard], data: { authReq: true } },
  { path: 'invalid-action', pathMatch: 'full', component: InvalidAction },
  { path: "**", component: InvalidRouteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavigation,
    AppFooter,
    CausesComponent,
    CauseListComponent,
    CauseItemComponent,
    ContainerComponent,
    CauseDetailComponent,
    CauseBigDetailsComponent,
    LoginComponent,
    RegisterComponent,
    InvalidRouteComponent,
    InvalidAction,
    UserComponent,
    CreateCauseComponent,
    ProfileComponent,
    InvalidValidationDirective,
    ValidValidationDirective,
    PasswordsMatchDirective,
    ProfileCausesComponent,
    ListedCausesComponent,
    ListedItemComponent,
    MakeDonationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CauseService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CauseInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }