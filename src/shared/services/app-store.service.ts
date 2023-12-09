import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  private userData: User = {
    _id: '465464dfasd4655465asd4f546',
    __v: 1,
    email: 'anakin@lastorder.com',
    firstName: 'Anakin',
    lastName: 'Skywalker',
    password: '',
    pin: '',
    lastLoginAt: '',
    expire: '',
    active: true,
    roles: ['employee'],
    emailVerified: true,
    createdAt: '',
    updatedAt: ''
  }
  private token: string | null = 'awsometoken';
  private serverUrl: string | null = null;

  constructor(private router: Router) { }

  logout() {
    this.token = null;
    this.router.navigate(['../login']);
  }

  hasToken(): boolean {
    return !!this.token;
  }

  setToken(token: string): void {
    this.token = token;
  }

  hasServerUrl(): boolean {
    return !!this.serverUrl;
  }

  setServerUrl(serverUrl: string): void {
    this.serverUrl = serverUrl;
  }

  getUserId(): string {
    return this.userData._id;
  }

  hasUserRole(role: string): boolean {
    return this.userData.roles.includes(role);
  }

  getUserRole(): string {
    return this.userData.roles[0];
  }

  getUserName(): {firstName: string, lastName: string} {
    return {
      firstName: this.userData.firstName,
      lastName: this.userData.lastName
    };
  }

  setUser(user: User): void {
    this.userData = user;
  }

}
