import { Component } from '@angular/core';
import {OauthComponent} from './oauth/oauth.component';
import {AccountStorage} from './service/account-storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public accountStorage: AccountStorage, public ouath: OauthComponent) {
  }

  title = 'bank-frontend-admin';
}
