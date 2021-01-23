import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { AddressComponent } from './components/address/address.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChosenOneComponent } from './components/chosenOne/chosen-one/chosen-one.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddressComponent,
    HomeComponent,
    ChosenOneComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'link/home', component: HomeComponent},
      {path: 'link/users', component: UsersComponent, children: [
          {path: ':id/address', component: ChosenOneComponent}
        ]}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
