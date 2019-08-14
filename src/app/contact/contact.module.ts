import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './contact.component';
import {RouterModule, Routes} from '@angular/router';

const routesConfig: Routes = [
  { path: 'contacts', component: ContactComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routesConfig)
  ],
  declarations: [ContactComponent]
})

export class ContactModule {}
