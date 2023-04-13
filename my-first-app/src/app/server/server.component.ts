import { Component } from '@angular/core';

//@ specifies this 'Component' is a decorator
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',

}) 
export class ServerComponent {
	serverId: number 		= 10;
	serverStatus: string  	= 'offline';

	getServerStatus() {
		return this.serverStatus;
	}
}