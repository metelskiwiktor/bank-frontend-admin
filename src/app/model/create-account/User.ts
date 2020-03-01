import {Gender} from './Gender';
import {IdCard} from './IdCard';

export class User {
  public firstName: string;
  public lastName: string;
  public pesel: string;
  public gender: Gender;
  public login: string;
  public password: string;
  public idCardDTO: IdCard;
}
