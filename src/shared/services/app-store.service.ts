import {Injectable, signal, WritableSignal} from '@angular/core';
import {Router} from "@angular/router";
import {User} from "../types/user.type";
import {Division} from "../types/division.type";
import {Group} from "../types/group.type";
import {Channel} from "../types/channel.type";

@Injectable({
  providedIn: 'root'
})
export class AppStoreService {
  private userData: WritableSignal<User | null> = signal(null);
  private selectedDivision: WritableSignal<Division | null> = signal(null);
  private selectedGroup: WritableSignal<Group | null> = signal(null);
  private selectedChannel: WritableSignal<Channel | null> = signal(null);

  constructor(private router: Router) {
    const userData = localStorage.getItem('userData');
    if (userData) {
      this.userData.set(JSON.parse(userData) as User);
    }
  }

  async logout(): Promise<void> {
    localStorage.removeItem('serverUrl');
    localStorage.removeItem('token');
    this.selectedDivision.set(null);
    this.selectedGroup.set(null);
    this.selectedChannel.set(null);
    this.userData.set(null);
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
    return this.userData()!._id;
  }

  hasUserRole(role: string): boolean {
    return this.userData()!.roles.includes(role);
  }

  getUserName(): {firstName: string, lastName: string} {
    return {
      firstName: this.userData()!.firstName,
      lastName: this.userData()!.lastName
    };
  }

  setUser(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user));
    this.userData.set(user);
  }

  // Division
  setDivision(division: Division): void {
    this.selectedDivision.set(division);
  }

  getDivision(): WritableSignal<Division | null> {
    return this.selectedDivision;
  }

  // Group
  setGroup(group: Group): void {
    this.selectedGroup.set(group);
  }

  getGroup(): WritableSignal<Group | null> {
    return this.selectedGroup;
  }

  // Channel
  setChannel(channel: Channel): void {
    this.selectedChannel.set(channel);
  }

  getChannel(): WritableSignal<Channel | null> {
    return this.selectedChannel;
  }

}
