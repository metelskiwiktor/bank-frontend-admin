import {Component, Injectable, NgZone, OnInit} from '@angular/core';
import {HttpClientService} from '../service/http-client.service';
import {Router} from '@angular/router';
import {AccountStorage} from '../service/account-storage';
import {Account} from '../model/account/Account';
import {User} from '../model/account/User';

@Component({
  selector: 'app-oauth',
  templateUrl: './creating-list.component.html',
  styleUrls: ['./creating-list.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CreatingListComponent implements OnInit {
  accounts: Account[] = new Account()[100];

  constructor(private httpClientService: HttpClientService, public route: Router, private ngZone: NgZone, private accountStorage: AccountStorage) {
  }

  ngOnInit(): void {
    this.httpClientService.getAllAccountsInCreatingStatus().subscribe(value => {
      this.accounts = value;
    });
  }

  detailsUser(value: User): string {
    const user =  '[imie=' + value.firstName + ', nazwisko=' +
      value.lastName + ', wlasciciel=' + value.accountOwner + ' plec=' +
      value.gender + ', login=' + value.login + ']';
    console.log(user);
    return user;
  }

  makeValid(accountNumber: string) {
    this.httpClientService.makeValid(accountNumber).subscribe();
    this.httpClientService.getAllAccountsInCreatingStatus().subscribe(value => {
      this.accounts = value;
    });
  }
}
