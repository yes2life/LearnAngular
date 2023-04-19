import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // serverElements = [];

  // this @Input() decorator allows the element property to be accessed outside of this component
  @Input('srvElement') element: { type: string, name: string, content: string };

  constructor() { }

  ngOnInit(): void {
  }

}
