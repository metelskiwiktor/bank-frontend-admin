import {Component, Injectable, NgZone, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Router} from '@angular/router';
import {AccountStorage} from '../service/account-storage';
import {Account} from '../model/account/Account';
import {CreateAccount} from '../model/create-account/CreateAccount';
import {User} from '../model/create-account/User';
import {IdCard} from '../model/create-account/IdCard';

@Component({
  selector: 'app-oauth',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CreateAccountComponent implements OnInit {
  account: CreateAccount;

  constructor(private httpClientService: HttpClientService, public route: Router, private ngZone: NgZone, private accountStorage: AccountStorage) {
    this.account = new CreateAccount();
    this.account.userDTO = new User();
    this.account.userDTO.idCardDTO = new IdCard();
  }

  ngOnInit(): void {}

  createAccount() {
    this.httpClientService.createAccount(this.account);
  }
}
