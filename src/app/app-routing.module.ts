import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreatingListComponent} from './creating-list/creating-list.component';
import {OauthComponent} from './oauth/oauth.component';
import {CreateAccountComponent} from './create-account/create-account.component';


const routes: Routes = [
  {path: 'creating-list', component: CreatingListComponent},
  {path: 'create-account', component: CreateAccountComponent},
  {path: 'login', component: OauthComponent},
  {path: 'logout', component: OauthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
