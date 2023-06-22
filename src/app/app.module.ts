import { CUSTOM_ELEMENTS_SCHEMA, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreakpointObserver, BreakpointState, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule, } from '@angular/material/card';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms'
// import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { UserHomeComponent } from './Users/user-home/user-home.component';
import { ListUsersComponent } from './Admin/list-users/list-users.component';
import { UpdateUserComponent } from './Admin/update-user/update-user.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { ViewpaintsComponent } from './user/viewpaints/viewpaints.component';
import { UserRegisterComponent } from './Users/user-register/user-register.component';
import { ViewPaintsComponent } from './Users/view-paints/view-paints.component';
import { BookListComponent } from './Admin/book-list/book-list.component';
import { UserPaymentComponent } from './Users/user-payment/user-payment.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AddUsersComponent } from './Admin/add-users/add-users.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    UserHomeComponent,
    UserLoginComponent,
    ListUsersComponent,
    UpdateUserComponent,
    AddUserComponent,
    ViewpaintsComponent,
    UserRegisterComponent,
    ViewPaintsComponent,
    BookListComponent,
    UserPaymentComponent,
    AdminLoginComponent,
    AddUsersComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    // MatFormFieldModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    HttpClientModule
  
  

    
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements OnInit {

  title = 'Zbs App';
  constructor(private _dialog: MatDialog, public responsive: BreakpointObserver){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
    this.responsive
    .observe([Breakpoints.HandsetPortrait])
    .subscribe((staste: BreakpointState) => {
      if(staste.matches){
        console.log('this is handset portrait point at max-width: 599.98 px and portrait orientation');
      }
    })
  }
  

 }
