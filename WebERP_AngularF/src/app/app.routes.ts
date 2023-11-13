import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ContactsChildOneComponent } from './components/contacts/contacts-child-one/contacts-child-one.component';
import { ContactsChildTwoComponent } from './components/contacts/contacts-child-two/contacts-child-two.component';
import { ContactsChildThreeComponent } from './components/contacts/contacts-child-three/contacts-child-three.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'contacts', component: ContactsComponent},
    { path: 'contacts/contactChild/01', component: ContactsChildOneComponent},
    { path: 'contacts/contactChild/02', component: ContactsChildTwoComponent},
    { path: 'contacts/contactChild/03', component: ContactsChildThreeComponent},
    { path: 'orders', component : OrdersComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'}
];
