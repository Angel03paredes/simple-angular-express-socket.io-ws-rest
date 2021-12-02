import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
@Injectable()
export class SocketService {
  constructor(private socket: Socket) {
      
      
  }

  messages:any=[]
  
  getMessage() {
     this.socket.on("chat:message",(data:any)=>{
      this.messages.push(data)
     })

  }

  sendMessage(data:any){
    this.socket.emit("chat:message",{data})
  }

}