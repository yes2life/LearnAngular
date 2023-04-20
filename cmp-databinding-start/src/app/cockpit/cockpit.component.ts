import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // EventEmitter is a generic type, hence the <>. EventEmitter is an Angular object that allows you to emit your own event.
  // It differs from Event, which is plain JavaScript.

  // @Output([alias]) is a decorator that allows event emitting.

  // The object passed in <> defines what is returned by the $event variable?
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // The object passed in <> defines what is returned by the $event variable? The '()' forces the property to call the constructor during
  // initialization of the instance.
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // can I create an event?
  blue = new EventEmitter
  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer() {
    this.serverCreated.emit({
        serverName: this.newServerName, 
        serverContent: this.newServerContent
      });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent
    });
  }  

}
