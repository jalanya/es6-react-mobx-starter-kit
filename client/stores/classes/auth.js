import { observable, computed, action } from 'mobx';

export class Auth {
  @observable token = null;

  constructor() {
  }

  @computed get isAuthenticated() {
    return !!this.token;
  }

  @action logout() {
    this.token = null;
  }
  
}
