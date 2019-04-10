import { Injectable } from '@angular/core';
import { GLOBAL } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url: string;
  public actions: any;

  constructor() {
    this.url = GLOBAL.authapi;
    this.actions = {
      login: '/api/login',
      register: '/api/register'
    };
  }

  async login(email, password) {
    let body = {
      email: email,
      password: password
    };
    let params = this.getParams(body);

    return await this.serverCall(this.url + this.actions.login, params);
  }

  async register(email, password) {
    let body = {
      email: email,
      password: password
    };
    let params = this.getParams(body);

    return await this.serverCall(this.url + this.actions.register, params);
  }

  async serverCall(url, params) {
    try {
      const res = await fetch(url, params);
      return await res.json();
    } catch (error) {
      console.log(error);
    }
  }

  getParams(body) {
    return {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }
  }
}
