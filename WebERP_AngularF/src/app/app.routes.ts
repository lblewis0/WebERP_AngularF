import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ContactsChildOneComponent } from './components/contacts/contacts-child-one/contacts-child-one.component';
import { ContactsChildTwoComponent } from './components/contacts/contacts-child-two/contacts-child-two.component';
import { ContactsChildThreeComponent } from './components/contacts/contacts-child-three/contacts-child-three.component';
import { LoginComponent } from './navigation/login/login.component';
import { isAuthGuard } from './shared/guards/is-auth.guard';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'home/login', component: LoginComponent},
    { path: 'contacts' , canActivate: [isAuthGuard], component: ContactsComponent},
    { path: 'contacts/contactChild/01' , canActivate: [isAuthGuard], component: ContactsChildOneComponent},
    { path: 'contacts/contactChild/02' , canActivate: [isAuthGuard], component: ContactsChildTwoComponent},
    { path: 'contacts/contactChild/03' , canActivate: [isAuthGuard], component: ContactsChildThreeComponent},
    { path: 'orders' , canActivate: [isAuthGuard], component : OrdersComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
