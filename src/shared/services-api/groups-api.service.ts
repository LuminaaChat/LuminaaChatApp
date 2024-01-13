import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppStoreService} from "../services/app-store.service";
import {Observable} from "rxjs";
import {Group} from "../types/group.type";

@Injectable({
  providedIn: 'root'
})
export class GroupsApiService {
  baseUrl: string = `${this.appStore.getServerUrl()}/api/v1/groups`;

  constructor(private httpClient: HttpClient,
              private appStore: AppStoreService) { }

  create() {};
  list(divisionId?: string): Observable<Group[]> {
    if (divisionId) {
      return this.httpClient.get<Group[]>(`${this.baseUrl}?divisionId=${divisionId}`);
    }
    return this.httpClient.get<Group[]>(this.baseUrl);
  };
  get(id: string): Observable<Group> {
    return this.httpClient.get<Group>(`${this.baseUrl}/${id}`);
  };
  update(id: string): Observable<Group> {
    return this.httpClient.get<Group>(`${this.baseUrl}/${id}`);
  };
  delete(id: string) {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`);
  };
}
