import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppStoreService} from "../services/app-store.service";
import {Division} from "../types/division.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DivisionsApiService {
  baseUrl: string = `${this.appStore.getServerUrl()}/api/v1/divisions`;

  constructor(private httpClient: HttpClient,
              private appStore: AppStoreService) { }

  create() {};
  list(): Observable<Division[]> {
    return this.httpClient.get<Division[]>(this.baseUrl);
  };
  get(id: string): Observable<Division> {
    return this.httpClient.get<Division>(`${this.baseUrl}/${id}`);
  };
  update(id: string): Observable<Division> {
    return this.httpClient.get<Division>(`${this.baseUrl}/${id}`);
  };
  delete(id: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  };
}
