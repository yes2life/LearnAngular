import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// watts components - don't include the 'ts' extension
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
