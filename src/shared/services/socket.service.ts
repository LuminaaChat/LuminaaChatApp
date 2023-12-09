import { Injectable } from '@angular/core';
import {io, Socket} from "socket.io-client";
import {AppStoreService} from "./app-store.service";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket!: Socket;

  constructor(private appStore: AppStoreService) { }

  start() {3
    if (this.appStore.hasServerUrl())
      this.socket = io(`${this.appStore.getServerUrl()}`, {
        auth: {
          token: this.appStore.getToken(),
          userID: this.appStore.getUserId(),
          userName: this.appStore.getUserName()
        }
      });

    if (this.socket) {
      this.socket.on("connect", () => {
        console.log('[SOCKET] connect: ',this.socket.id);
      });

      this.socket.on("connect_error", (err) => {
        console.log('[SOCKET] Error: ', err);
      });

      this.socket.on("connected", () => {
        console.log('[SOCKET] connected: ', this.socket.id);
      });

      this.socket.on("disconnect", () => {
        console.log(this.socket.id);
      });
    }
  }
}
