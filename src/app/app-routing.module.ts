import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TelevisionListComponent } from './television-list/television-list.component';
import { LaptopListComponent } from './laptop-list/laptop-list.component';
import { MobilePhoneListComponent } from './mobile-phone-list/mobile-phone-list.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/television', component: TelevisionListComponent },
  { path: 'product/laptop', component: LaptopListComponent },
  { path: 'product/mobile-phone', component: MobilePhoneListComponent },
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
