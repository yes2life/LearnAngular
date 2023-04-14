import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  serverCreationStatus = 'No server was created.';
  serverName = '';

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

  onUpdateServerName(event: any){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    
    // this works too.
    
    this.serverName = event.target.value;
  }
}
