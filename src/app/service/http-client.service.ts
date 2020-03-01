import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountStorage} from './account-storage';
import {Login} from '../model/Login';
import {Account} from '../model/account/Account';
import {CreateAccount} from '../model/create-account/CreateAccount';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, private accountStorage: AccountStorage) {
  }

  public getAllAccountsInCreatingStatus() {
    const tokenValue = this.accountStorage.getTokenValue();
    return this.httpClient.get<Account[]>('http://localhost:8090/bank-administration/creating-list', {headers: {tokenValue}});
  }

  public makeValid(accountNumber: string) {
    const tokenValue = this.accountStorage.getTokenValue();
    return this.httpClient.get('http://localhost:8090/bank-administration/valid/' + accountNumber, {headers: {tokenValue}});
  }

  public createAccount(account: CreateAccount) {
    const tokenValue = this.accountStorage.getTokenValue();
    this.httpClient.post('http://localhost:8090/account/create-account', account, {headers: {tokenValue}}).subscribe();
  }

  public login(login: Login) {
    return this.httpClient.post('http://localhost:8090/oauth/login', login, {responseType: 'text'});
  }

  public logout() {
    const tokenValue = this.accountStorage.getTokenValue();
    this.httpClient.get('http://localhost:8090/oauth/logout', {headers: {tokenValue}});
    this.accountStorage.logout();
  }
}
