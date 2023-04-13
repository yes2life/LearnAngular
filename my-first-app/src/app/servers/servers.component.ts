import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created.'

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  // onCreateServer(event: any) {
  //   this.serverCreationStatus = 'Server was created.';
  //   console.log(event.target);
  //   console.log(event.type);
  //   console.log(event.target.innertText);
  //   console.log(event.target.classList);  
  // }

  onCreateServer(element: any) {
    this.serverCreationStatus = 'Server was created.';
    console.dir(element);  
  }
}
