import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppStoreService} from "../services/app-store.service";
import {User} from "../types/user.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private httpClient: HttpClient,
              private appStore: AppStoreService) { }

  login(email: string, password: string): Observable<{user: User, token: string}> {
    return this.httpClient.post<{user: User, token: string}>(`${this.appStore.getServerUrl()}/api/v1/auth/login`, {email: email, password: password});
  }

  refreshToken(): Observable<{user: User, token: string}> {
    return this.httpClient.get<{user: User, token: string}>(`${this.appStore.getServerUrl()}/api/v1/auth/refresh`);
  }
}
