import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from '@angular/common';
import {ContactModule} from './contact/contact.module';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
  {path: 'detail/:id/:name/:phone', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    ContactModule,
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  declarations: [
    PageNotFoundComponent,
    ContactDetailComponent,
  ],
  exports: [RouterModule]
})
export  class AppRoutingModule {}
