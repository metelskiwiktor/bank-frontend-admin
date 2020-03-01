import {User} from './User';
import {CreditCard} from './CreditCard';

export class Account {
  public users: User[];
  public accountNumber: string;
  public balance: string;
  public accountStatus: string;
  public creditCard: CreditCard;
}
