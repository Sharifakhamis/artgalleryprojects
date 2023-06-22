import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { UserHomeComponent } from './Users/user-home/user-home.component';
import { ViewPaintsComponent } from './Users/view-paints/view-paints.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { ListUsersComponent } from './Admin/list-users/list-users.component';
import { UserRegisterComponent } from './Users/user-register/user-register.component';
import { BookListComponent } from './Admin/book-list/book-list.component';
import { UserPaymentComponent } from './Users/user-payment/user-payment.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { AddUserComponent } from './Admin/add-user/add-user.component';


const routes: Routes = [
  
  // { path: '', component: UserLoginComponent},
  { path: '', component: UserLoginComponent},

  { path: 'user_home', component: UserHomeComponent },
  { path: "viewpaints", component: ViewPaintsComponent},
  { path: "book_list", component: BookListComponent},
  { path: 'admin_home', component: AdminHomeComponent},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: "user_payment", component: UserPaymentComponent},
  { path: "User_register", component: UserRegisterComponent},
  { path: "Add_users", component: AddUserComponent},
  // { path: "user_payment", component: UserPaymentComponent},
  { path: 'list_users', component: ListUsersComponent},
  // { path: 'book-list', component: BookListComponent}

  // { path: 'user-register', component: UserRegisterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
  
  
