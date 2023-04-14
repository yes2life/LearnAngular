import { Component } from '@angular/core';

//@ specifies this 'Component' is a decorator
@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styles: [`
		.online {
			color: white;
		}
	`]

}) 
export class ServerComponent {
	serverId: number 		= 10;
	serverStatus: string  	= 'offline';

	constructor() {
		this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
	}

	getServerStatus(): string {
		return this.serverStatus;
	}

	getColor() {
		return this.serverStatus === 'online' ? 'green' : 'red';
	  }
}