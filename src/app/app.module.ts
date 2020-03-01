import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OauthComponent} from './oauth/oauth.component';
import {FormsModule} from '@angular/forms';
import {CreatingListComponent} from './creating-list/creating-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CreateAccountComponent} from './create-account/create-account.component';

@NgModule({
  declarations: [
    AppComponent,
    OauthComponent,
    CreatingListComponent,
    CreateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
