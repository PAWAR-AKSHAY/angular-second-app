import { Component, OnInit } from '@angular/core';

@Component({
  // element selector css selector
  selector: 'app-servers',
 
  // attribute selector []
  // selector: '[app-servers]',

  //class selector .
  //selector :'.app-servers',
 
  // template: `
  // <app-server></app-server> 
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false; // ngIf use
  servers = ['Testserver', 'Testserver 2']; //ngFor use

  constructor() {
    setTimeout( ()=> {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event : any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
