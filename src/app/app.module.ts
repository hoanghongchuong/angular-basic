import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
// import {Routes, RouterModule} from '@angular/router';


import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { UserFormComponent } from './user-form/user-form.component';
import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';
import {CardComponent} from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import {IpComponent} from './ip.component';
import {SignInComponent} from './sign-in.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    UserFormComponent,
    ParentComponent,
    ChildComponent,
    CardComponent,
    LearnPipeComponent,
    IpComponent,
    SignInComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
