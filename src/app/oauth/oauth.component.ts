import {Component, Injectable, NgZone, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Router} from '@angular/router';
import {AccountStorage} from '../service/account-storage';
import {Login} from '../model/Login';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class OauthComponent implements OnInit {
  user: Login = new Login();

  constructor(private httpClientService: HttpClientService, public route: Router, private ngZone: NgZone, private accountStorage: AccountStorage) {
  }

  ngOnInit(): void {
  }

  login() {
    this.httpClientService.login(this.user).subscribe(value => {
      this.accountStorage.setTokenValue(value);
      this.ngZone.run(() => this.route.navigateByUrl('/creating-list'));
    });
  }

  logout() {
    this.httpClientService.logout();
    this.route.navigateByUrl('/');
  }

}
