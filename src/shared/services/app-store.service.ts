import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../types/user.type";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  private userData: User | null = null;

  constructor(private router: Router) {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.userData = JSON.parse(userData);
    }
  }

  async logout(): Promise<void> {
    localStorage.removeItem('serverUrl');
    localStorage.removeItem('token');
    this.userData = null;
    await this.router.navigate(['../server-choose']);
  }

  // Token
  hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  unsetToken(): void {
    localStorage.removeItem('token');
  }

  // Server URL

  hasServerUrl(): boolean {
    return !!localStorage.getItem('serverUrl');
  }

  getServerUrl(): string | null {
    return localStorage.getItem('serverUrl');
  }

  setServerUrl(serverUrl: string): void {
    localStorage.setItem('serverUrl', `http://${serverUrl}`);
  }

  // User
  getUserId(): string {
    return this.userData!._id;
  }

  hasUserRole(role: string): boolean {
    return this.userData!.roles.includes(role);
  }

  getUserName(): {firstName: string, lastName: string} {
    return {
      firstName: this.userData!.firstName,
      lastName: this.userData!.lastName
    };
  }

  setUser(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.userData = user;
  }

}
