import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import {SocketService} from './socket.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  socketService:SocketService 
  constructor(private socket: Socket) {
    this.socketService = new SocketService(socket)
  }
  ngOnInit(): void {
   
    this.socketService.getMessage()
  }

  sendMessage(message:string){ 
    this.socketService.sendMessage({message})}

  title = 'my-app';
}
